import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice';
import authService from '../../appwrite/config' 

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-500 rounded-full'>Logout</button>
  )
}

export default LogoutBtn