import { useState } from "react";

function App() {
  
  const [textarea, setTextarea] = useState('')
  const textToSpeech = ()=>{
    let speech = new SpeechSynthesisUtterance()
    speech.text = textarea
    window.speechSynthesis.speak(speech)
    console.log(speechSynthesis)
  

  }
  return (
    <div className="hero">
      <h1>Text to speech <span className="span">converter</span></h1>
      <textarea placeholder="Enter the text" onChange={(e)=>setTextarea(e.target.value)} ></textarea>
      <div className="row">
  
        <button onClick={()=>textToSpeech()}>Listen</button>
      </div>
  
    </div>
  )
}

export default App;
