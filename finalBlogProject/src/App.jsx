
import './App.css'

function App() {
  // changing this since our app was created using vite and not create react app
  // console.log(process.env.REACT_APP_APPWRITE_URL);

// -------------------------------    NOTE       ------------------------------

  // this sometimes may not load if inside every file this is called, so the whole app will crash.
  // so a good practice is to make a conf folder and conf.js file inside it and load all variables from there
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  

  return (
    <>
      <h1 className='text-red-700 text-3xl'>Final project of this series which is a blog app with appwrite</h1>
    </>
  )
}

export default App
