
import { useState } from "react"

function App() {

  const [colour, setColour] = useState("black")
  return (
    <>
      <h2 className='bg-blue-500 text-black p-4 text-xl'>Tailwind Working</h2>
      <div className="w-full h-screen duration-200" style={{backgroundColor : colour}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-cyan-400 px-3 py-2 rounded-3xl">
            <button onClick={() => setColour("red")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => setColour("blue")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={() => setColour("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
            <button onClick={() => setColour("green")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "green"}}>Green</button>
            <button onClick={() => setColour("pink")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "pink"}}>Pink</button>
            <button onClick={() => setColour("brown")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "brown"}}>Brown</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
