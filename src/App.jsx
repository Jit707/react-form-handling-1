import { useState } from 'react';
import "./App.css";


function App() {

  const[message,setmessage]=useState("")
  console.log(message);

  const handleSubmit =(event) => {
setmessage(event.target.value)

  }  

  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" name="greeting-message" value ={message} onChange={(event) => {
          
          
          setmessage(event.target.value)
        }} />
      </div>

      <div className="buttons">
        <button type='submit'>Update text</button>
      </div>
    </div>
  );
}

export default App;
