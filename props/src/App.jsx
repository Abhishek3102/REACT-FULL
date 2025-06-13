import { useState } from 'react'
import Card from './components/Card'
import './App.css'
import './index.css'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 mb-4'>Props with tailwind!</h1>
      <Card cardName="atrangi" char="bhaav"/>
    </>
  )
}

export default App
