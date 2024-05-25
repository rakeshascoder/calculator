import { useState } from 'react'

import './App.css'

function App() {
  let [data,setData]=useState('')
  let list = ['C', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', "-","=", "*"]
  function btn(e) {
    if (e.target.textContent === "=") {
      y = eval(data)      
      setData(y)
    } else if (e.target.textContent === "C") {
      setData('')
    }
    else {
      setData(data+=e.target.textContent)
}
    
  }

  return (
    <>
      <input type="text" readOnly name="" id=""  value={data} />
      {list.map((item) => <button onClick={btn}>{item}</button>)}
    </>
  )
}

export default App
