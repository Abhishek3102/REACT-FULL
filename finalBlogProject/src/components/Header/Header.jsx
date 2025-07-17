import React from 'react'
import {Container, Logo, LogoutBtn} from '../index' // Importing components from index.js
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// we will use conditional rendering to show the header(logout) only if the user is logged in.
function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate();

    // we can use this to navigate to different pages
    // just add the path to the object
    // for example, if we want to navigate to the home page, we can add {
    const navigateItems = [
        {
            name: "Home",
            slug: "/",
            active: true
        }, {name: "Login",
            slug: "/login",
            active: !authStatus},
         {name: "Signup",
            slug: "/signup",
            active: !authStatus},
        {name: "All Posts",
            slug: "/all-posts",
            active: authStatus},
        {name: "Add Post",
            slug: "/add-post",
            active: authStatus},
    ]

    return (
    <header className='py-3 shadow bg-gray-500'>
        <Container>
            <nav className='flex'>
                <div className='mr-4'>
                    <Link to='/'>
                    <Logo width="70px" />
                    </Link>
                </div>
                <ul className='flex ml-auto'>
                    {navigateItems.map((item) => item.active ? (
                        // the html element which is repeating, there we have to add a key
                        <li key={item.name}>
                            <button
                            onClick={() => navigate(item.slug)}
                            className='inline-block px-6 py-2 duration-200 hover:bg-blue-500 rounded-full'>
                                {item.name}
                            </button>
                        </li>
                    ) : null
                    )}

                    // this is a common react syntax, if first condition is true, then only render the second part
                    {authStatus && (
                        <li>
                            <LogoutBtn />
                        </li>
                    )}
                </ul>
            </nav>
        </Container>
    </header>
        
  )
}

export default Header