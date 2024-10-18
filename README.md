# dagloapi-js-beta

## Usage
```
import { DagloAPI } from './lib/index.js';

const dagloToken = 'YOUR_TOKEN'; // REPLACE TO YOUR TOKEN
const baseURL = 'https://apis.daglo.ai'

let client = new DagloAPI({ 
	host: baseURL,
	apiToken: dagloToken
});
let transcriber = client.realtime.transcriber();

transcriber.on('transcript', (data) => {
  // when Transcript success,
  //   data.text: string; transcript result

})

let stream = null;
try {
  // capture the microphone
  stream = await navigator.mediaDevices.getUserMedia({ audio: true });
}
catch (err) {
  console.log("The following error occured: " + err);
  return alert("getUserMedia not supported on your browser");
}

if(stream) {
  transcriber.stream(stream);
}
```
