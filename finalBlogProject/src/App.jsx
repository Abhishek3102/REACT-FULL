import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import './App.css'
import authService from './appwrite/auth';
import {login, logout} from './store/authSlice';

function App() {
  // changing this since our app was created using vite and not create react app
  // console.log(process.env.REACT_APP_APPWRITE_URL);

// -------------------------------    NOTE       ------------------------------

  // this sometimes may not load if inside every file this is called, so the whole app will crash.
  // so a good practice is to make a conf folder and conf.js file inside it and load all variables from there
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => 
      setLoading(false) 
    )
  }, []) // here dependency array needs to be filled

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
        TODO : {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
      {/* <h1 className='text-red-700 text-3xl'>Final project of this series which is a blog app with appwrite</h1> */}
    </div>
  ) : null
}

export default App
