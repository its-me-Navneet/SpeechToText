
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition' 
import useClipboard from "react-use-clipboard";
function App() { 

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const startListening = () => SpeechRecognition.startListening({ continuous: true }); 
  
  const [isCopied, setCopied] = useClipboard(transcript,{
    successDuration:1000,
  });

  

  return (
    <div className="App">
      
      <h1>Speech To Text Converter</h1>
       <div className="content" > {transcript}</div>
        <div className="btn">
        <button onClick={setCopied}> {isCopied ? "copied" : "copy to clipboard"}</button>
       <button onClick={startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
       </div>

    </div>
  );
}

export default App;
