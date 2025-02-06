// Copyright 2024 ActionPower.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
"use strict";

import { AudioClassifier, FilesetResolver } from "https://actionpower.github.io/dagloapi-js-beta/lib/mediapipe-audio.module.js";

export class DagloAPI {
  // 공통으로 사용할 클레스 변수 선언
  static DEFAULT_CONFIG = {
    threshold: 0.65,
    concatLevel: 3,
    bufferSize: 8192,
    frameSize: 3,
    maxDuration : 20,
  };
  constructor({apiToken = '', host = 'https://apis.daglo.ai'}) {
    host = host.replace(/\/+$/gim, '');
    this.apiToken = apiToken;
    this.host = host;
  }

  stream = {
    transcriber: () => {
      let lib = {
        model: {
          audioClassifier: undefined,
          audioCtx: undefined, 
          audio: undefined, 
        },
        utils: {
          __callback: {
            open: (sessionId) => {},
            close: (code, reason) => {},
            start: () => {},
            stop: () => {},
            vad: (audioBuffer, wavBlob) => {},
            transcript: (transcript, audioBuffer, wavBlob) => {},
            error: (error) => {},
            debug: (debug) => {},
          },
          path: {
            dir: '',
            join: (...parts) => {
              let separator = '/';
              let replace = new RegExp(separator+'{1,}', 'g');

              return parts.join(separator).replace(replace, separator);
            }
          },
          nanoid: (length = 21, candidate = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-') => {
            let id = '';

            for (let i = 0; i < (+length || 0); i++) {
              id += candidate[Math.floor(candidate.length * Math.random())];
            }

            return id;
          },
          float32ToWav(buffer, sampleRate) {
            const writeString = (view, offset, string) => {
              for (let i = 0; i < string.length; i++) {
                view.setUint8(offset + i, string.charCodeAt(i));
              }
            }
            const floatTo16BitPCM = (view, offset, input) => {
              for (let i = 0; i < input.length; i++, offset += 2) {
                const s = Math.max(-1, Math.min(1, input[i]));
                view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
              }
            }
        
            const numOfChannels = 1;  // 단일 채널 (모노)
            const numOfFrames = buffer.length;
            const bytesPerSample = 2;  // 16비트 PCM
        
            // WAV 파일의 헤더 크기와 데이터 크기 계산
            const headerSize = 44;
            const dataSize = numOfFrames * numOfChannels * bytesPerSample;
            const totalSize = headerSize + dataSize;
        
            // WAV 파일을 위한 Uint8Array 생성
            const wavBuffer = new ArrayBuffer(totalSize);
            const view = new DataView(wavBuffer);
        
            // RIFF 헤더 작성
            writeString(view, 0, 'RIFF');
            view.setUint32(4, totalSize - 8, true);
            writeString(view, 8, 'WAVE');
        
            // fmt 서브체크 작성
            writeString(view, 12, 'fmt ');
            view.setUint32(16, 16, true);  // 서브체크 크기 (16바이트)
            view.setUint16(20, 1, true);   // 오디오 포맷 (1 = PCM)
            view.setUint16(22, numOfChannels, true);  // 채널 수
            view.setUint32(24, sampleRate, true);  // 샘플레이트
            view.setUint32(28, sampleRate * numOfChannels * bytesPerSample, true);  // 초당 바이트 수
            view.setUint16(32, numOfChannels * bytesPerSample, true);  // 블록 정렬
            view.setUint16(34, bytesPerSample * 8, true);  // 비트 수 (16비트)
        
            // data 서브체크 작성
            writeString(view, 36, 'data');
            view.setUint32(40, dataSize, true);
        
            // Float32Array 데이터를 16비트 PCM으로 변환하여 삽입
            floatTo16BitPCM(view, 44, buffer);
        
            return new Blob([view], { type: 'audio/wav' });
          },
        },

        on: (key, callback) => {
          lib.utils.__callback[key] = callback;
        },
        init: async () => {
          let dir = 'libs/';
          if (!this.apiToken?.length) {
            return console.error('Invalid API key');
          }
          lib.utils.path.dir = dir;

          lib.model.audio = await FilesetResolver.forAudioTasks(
            'https://actionpower.github.io/dagloapi-js-beta/lib/wasm'
          );
          lib.model.audioClassifier = await AudioClassifier.createFromOptions(lib.model.audio, {
            baseOptions: {
              modelAssetPath: 'https://actionpower.github.io/dagloapi-js-beta/lib/audio.tflite'
            }
          })
          
          if (typeof(lib.utils.__callback['open']) == 'function') {
            lib.utils.__callback['open'](lib.utils.nanoid());
          }
        },
        start: async ({threshold = DagloAPI.DEFAULT_CONFIG.threshold, concatLevel = DagloAPI.DEFAULT_CONFIG.concatLevel, sttConfig = undefined} = {}) => {
          const constraints = { audio: true };
          let stream;
          const self = this;
        
          const bufferSize = DagloAPI.DEFAULT_CONFIG.bufferSize;
          const frameSize = DagloAPI.DEFAULT_CONFIG.frameSize;
        
          let audioBuffer = new Float32Array(bufferSize * frameSize);
          let SpeechBuffer = [];
          let buffers = Array(frameSize).fill(null).map(() => Array(bufferSize).fill(0));
        
          let bufferIdx = 0;
          let nonSpeechTime = -1;
          
          if (sttConfig && sttConfig?.keywordBoost.enable == undefined && !sttConfig?.keywordBoost.keywords?.length) {
            sttConfig.keywordBoost.enable = true;
          }
          if (sttConfig?.keywordBoost?.boost) {
            sttConfig.keywordBoost.boost = Math.max(Math.min(15, Math.floor(sttConfig.keywordBoost.boost * 15)), 1);
          }
        
          try {
            stream = await navigator.mediaDevices.getUserMedia(constraints);
          }
          catch (err) {
            console.log("The following error occured: " + err);
            return alert("getUserMedia not supported on your browser");
          }
        
          if (!lib.model.audioCtx) {
            lib.model.audioCtx = new AudioContext({ sampleRate: 44100 });
            
            const source = lib.model.audioCtx.createMediaStreamSource(stream);
            const scriptNode = lib.model.audioCtx.createScriptProcessor(bufferSize, 1, 1);
            
            function processAudioBuffer() {
              if (typeof(lib.utils.__callback['transcript']) == 'function' || 
                  typeof(lib.utils.__callback['vad']) == 'function') {
                
                let audioBuffer = new Float32Array(bufferSize * (SpeechBuffer.length - Math.floor(concatLevel / 2)));
                
                for (let i = 0; i < SpeechBuffer.length - Math.floor(concatLevel / 2); i++) {
                  audioBuffer.set(SpeechBuffer[i], i * bufferSize);
                }
                
                const wavBlob = lib.utils.float32ToWav(audioBuffer, 44100);
                
                if (typeof(lib.utils.__callback['vad']) == 'function') {
                  lib.utils.__callback['vad'](audioBuffer, wavBlob);
                }
                
                const formData = new FormData();
                formData.append('file', wavBlob, 'record.wav');
                
                if (sttConfig) {
                  formData.append('sttConfig', JSON.stringify(sttConfig));
                }
                
                fetch(`${self.host}/stt/v1/sync/transcripts`, {
                  method: 'POST',
                  headers: {
                    'Authorization': 'Bearer ' + self.apiToken
                  },
                  body: formData,
                })
                .then(response => response.json())
                .then(data => {
                  if (typeof(lib.utils.__callback['transcript']) == 'function') {
                    lib.utils.__callback['transcript']({text: data?.sttResult?.transcript});
                  }
                })
                .catch(error => {
                  console.error('Error:', error);
                });
              }
            }
        
            scriptNode.onaudioprocess = (audioProcessingEvent) => {
              const inputBuffer = audioProcessingEvent.inputBuffer;
              let inputData = inputBuffer.getChannelData(0);
              let _inputData = Object.assign([], inputData);
              buffers[bufferIdx % frameSize] = _inputData;
              
              //최대 버퍼 사이즈
              const MAX_SAMPLES = DagloAPI.DEFAULT_CONFIG.maxDuration * 44100;
              
              for (let i = 0; i < frameSize; i++) {
                audioBuffer.set(buffers[(i + bufferIdx + 1) % frameSize], i * bufferSize);
              }
              
              bufferIdx++;
              
              const result = lib.model.audioClassifier.classify(audioBuffer);
              const categories = result[0].classifications[0].categories;
              const output = categories.filter((item) => item?.score >= threshold);
              const speechIdx = output.findIndex((item)=>item.categoryName == 'Speech');
              
              if (speechIdx != -1) {
                SpeechBuffer.push(_inputData);
                nonSpeechTime = 0;
              } else if (nonSpeechTime != -1) {
                if (++nonSpeechTime < concatLevel) {
                  SpeechBuffer.push(_inputData);
                } else {
                  // concatLevel을 초과하면 현재까지의 음성 데이터 처리
                  processAudioBuffer();
                  nonSpeechTime = -1;
                  SpeechBuffer = [];
                }
              } else {
                nonSpeechTime = -1;
                SpeechBuffer = [];
                SpeechBuffer.push(_inputData);
              }
              //버퍼가 최대 샘플 수를 초과하면 강제로 처리
              if (SpeechBuffer.length * bufferSize >= MAX_SAMPLES) {
                processAudioBuffer();
                nonSpeechTime = -1;
                SpeechBuffer = [];
              }
              
              if (typeof(lib.utils.__callback['debug']) == 'function') {
                lib.utils.__callback['debug'](output);
              }
            };
            source.connect(scriptNode);
            scriptNode.connect(lib.model.audioCtx.destination);
          }
          else if (lib.model.audioCtx.state === "running") {
            await lib.model.audioCtx.suspend();
        
            if (typeof(lib.utils.__callback['stop']) == 'function') {
              lib.utils.__callback['stop']();
            }
        
            return;
          }
        
          audioBuffer = new Float32Array(bufferSize * frameSize);
          SpeechBuffer = [];
          buffers = Array(frameSize).fill(null).map(() => Array(bufferSize).fill(0));
        
          bufferIdx = 0;
          nonSpeechTime = -1;
          
          await lib.model.audioCtx.resume();
          
          if (typeof(lib.utils.__callback['start']) == 'function') {
            lib.utils.__callback['start']();
          }
        },
        connect: async (stream) => {
          const self = this;
          const threshold = DagloAPI.DEFAULT_CONFIG.threshold;
          const concatLevel = DagloAPI.DEFAULT_CONFIG.concatLevel;
          const bufferSize = DagloAPI.DEFAULT_CONFIG.bufferSize;
          const frameSize = DagloAPI.DEFAULT_CONFIG.frameSize;
        
          let audioBuffer = new Float32Array(bufferSize * frameSize);
          let SpeechBuffer = [];
          let buffers = Array(frameSize).fill(null).map(() => Array(bufferSize).fill(0));
        
          let bufferIdx = 0;
          let nonSpeechTime = -1;
          
          if (!lib.model.audioCtx) {
            lib.model.audioCtx = new AudioContext({ sampleRate: 44100 });
            
            const source = lib.model.audioCtx.createMediaStreamSource(stream);
            const scriptNode = lib.model.audioCtx.createScriptProcessor(bufferSize, 1, 1);
            
            function processAudioBuffer() {
              if (typeof(lib.utils.__callback['transcript']) == 'function' || 
                  typeof(lib.utils.__callback['vad']) == 'function') {
                
                let audioBuffer = new Float32Array(bufferSize * (SpeechBuffer.length - Math.floor(concatLevel / 2)));
                
                for (let i = 0; i < SpeechBuffer.length - Math.floor(concatLevel / 2); i++) {
                  audioBuffer.set(SpeechBuffer[i], i * bufferSize);
                }
                
                const wavBlob = lib.utils.float32ToWav(audioBuffer, 44100);
                
                if (typeof(lib.utils.__callback['vad']) == 'function') {
                  lib.utils.__callback['vad'](audioBuffer, wavBlob);
                }
                
                const formData = new FormData();
                formData.append('file', wavBlob, 'recording.wav');
                
                fetch(`${self.host}/stt/v1/sync/transcripts`, {
                  method: 'POST',
                  headers: {
                    'Authorization': 'Bearer ' + self.apiToken
                  },
                  body: formData,
                })
                .then(response => response.json())
                .then(data => {
                  if (typeof(lib.utils.__callback['transcript']) == 'function') {
                    lib.utils.__callback['transcript']({text: data?.sttResult?.transcript});
                  }
                })
                .catch(error => {
                  console.error('Error:', error);
                });
              }
            }
        
            scriptNode.onaudioprocess = (audioProcessingEvent) => {
              const inputBuffer = audioProcessingEvent.inputBuffer;
              let inputData = inputBuffer.getChannelData(0);
              let _inputData = Object.assign([], inputData);
              buffers[bufferIdx % frameSize] = _inputData;
              
              const MAX_SAMPLES = DagloAPI.DEFAULT_CONFIG.maxDuration * 44100;
              
              for (let i = 0; i < frameSize; i++) {
                audioBuffer.set(buffers[(i + bufferIdx + 1) % frameSize], i * bufferSize);
              }
              
              bufferIdx++;
              
              const result = lib.model.audioClassifier.classify(audioBuffer);
              const categories = result[0].classifications[0].categories;
              const output = categories.filter((item) => item?.score >= threshold);
              const speechIdx = output.findIndex((item)=>item.categoryName == 'Speech');
              
              if (speechIdx != -1) {
                SpeechBuffer.push(_inputData);
                nonSpeechTime = 0;
              } else if (nonSpeechTime != -1) {
                if (++nonSpeechTime < concatLevel) {
                  SpeechBuffer.push(_inputData);
                } else {
                  processAudioBuffer();
                  nonSpeechTime = -1;
                  SpeechBuffer = [];
                }
              } else {
                nonSpeechTime = -1;
                SpeechBuffer = [];
                SpeechBuffer.push(_inputData);
              }
              
              if (SpeechBuffer.length * bufferSize >= MAX_SAMPLES) {
                processAudioBuffer();
                nonSpeechTime = -1;
                SpeechBuffer = [];
              }
            };
            source.connect(scriptNode);
            scriptNode.connect(lib.model.audioCtx.destination);
          }
          else if (lib.model.audioCtx.state === "running") {
            await lib.model.audioCtx.suspend();
            return;
          }
        
          audioBuffer = new Float32Array(bufferSize * frameSize);
          SpeechBuffer = [];
          buffers = Array(frameSize).fill(null).map(() => Array(bufferSize).fill(0));
        
          bufferIdx = 0;
          nonSpeechTime = -1;
          
          await lib.model.audioCtx.resume();
        },
      };

      lib.init();

      return lib;
    }
  }
}
