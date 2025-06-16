import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : "", 
        element : <Home/>
      },
      {
        // no need to give /route name bcoz / is already used above 
        path : "about",
        element : <About/>
      },
      {
        // no need to give /route name bcoz / is already used above 
        path : "contact",
        element : <Contact/>
      },
      {
        // no need to give /route name bcoz / is already used above 
        // loader={() => },
        // To get github followers in an optimized way, use Data Loader, refer documentation or this code file from chai-react
        path : "github",
        element : <Github/>
      },
      {
        // no need to give /route name bcoz / is already used above 
        path : "user/:userid",
        element : <User/>
      },
      {
        // no need to give /route name bcoz / is already used above 
        path : "github",
        element : <Github/>
      }
    ]
  }
])

// easier way for above code of providing routes
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout/>}>
//      <Route path='' element={<Home/>}>
//      <Route path='about' element={<About/>}>
//      <Route path='contact' element={<Contact/>}>
// 
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
