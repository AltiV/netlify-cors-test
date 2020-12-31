import { useState } from 'react'

import logo from './logo.svg';
import './App.css';

function App() {
  const [msg, setMsg] = useState("click the button")
  const handler = () =>
    fetch("https://icanhazdadjoke.com/", { headers: { accept: "Accept: application/json" } })
      .then((x) => x.json())
      .then(({ msg }) => setMsg(msg))

  return (
    <div className="App">
      <header className="App-header">
        <p>message: {msg}</p>
        <button onClick={handler}> click meeee</button>
      </header>
    </div>
  )
}

export default App;
