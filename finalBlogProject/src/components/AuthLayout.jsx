// this is a mechanism for protecting the pages/routes
import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status);
    
    useEffect(() => {
        // if authentication is true, then we are checking if the user is authenticated
        // if authentication is false, then we are checking if the user is not authenticated
        // if the user is authenticated, then we redirect to the home page
        // if the user is not authenticated, then we redirect to the login page
        if(authentication && authStatus !== "authentication"){
            navigate("/login")
        }
        
        else if(!authentication && authStatus!== "authentication"){
            navigate("/")
        }
        setLoader(false); // Set loader to false after checking authentication because we don't want to keep the loader on indefinitely
    }, [authStatus, navigate, authentication])

  return (
    <div>AuthLayout</div>
  )
}

