import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15 
  
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter >= 20) return;
    // console.log(`Value of counter is ${counter}`);
    setCounter(counter+1)
  }
  const removeValue = () => {
    if(counter <= 0) return;
    // console.log(`Value of counter is ${counter}`);
    setCounter(counter-1)
  
  }

  return (
    <>
      <h1>Counter won't go above 20 or below 0!</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      &nbsp;
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
