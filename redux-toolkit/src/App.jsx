

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
 

  return (
    <>
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center px-4">
      <h1 className="text-4xl font-extrabold mt-10 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
      Starting with redux toolkit!</h1>
      <AddTodo/>
      <Todos/>
    </div>
    </>
  )
}

export default App
