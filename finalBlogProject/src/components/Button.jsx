// this is a common button component that can be used throughout the application

import React from 'react'

function Button({children, type = 'button', bgColor = 'blue', textColor = 'text-white', className = '', ...props}) {
  return (
    // using template literals to dynamically set class names
    // this allows us to pass additional classes through the className prop
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>{children}</button>
  )
}

export default Button