import { useState } from "react";
import { useAsyncError } from "react-router-dom";
function App() {
  const [listen, setListen] = useState('')
  const [textarea, setTextarea] = useState('')
  const textToSpeech = ()=>{
    let speech = new SpeechSynthesisUtterance()
    speech.text = textarea
    window.speechSynthesis.speak(speech)
  }
  return (
    <div className="hero">
      <h1>Text to speech <span className="span">converter</span></h1>
      <textarea placeholder="Enter the text" onChange={(e)=>setTextarea(e.target.value)} ></textarea>
      <div className="row">
        <select></select>
        <button onClick={()=>textToSpeech()}>Listen</button>
      </div>
      {console.log(listen)}
    </div>
  )
}

export default App;
