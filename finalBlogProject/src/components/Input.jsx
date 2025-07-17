// -----------------------     NOTE     -----------------------

// here main concept to learn is forward ref. eg : in forms, there are many times we need to access the input element which are same, but wherever the page will be, all inputs will be combined and there we will need the state access
// but this is just a simple input component, where we will not have any state. the state will be in some other file but in the page in form we will need all simultaneously.
// so we will use forward ref to access the input element which connects input component with its state in the form component 

import React, {useId} from 'react'

/*
function Input() {
    const id = useId(); // this is used to generate a unique id for the input element, so that we can use it in the label for attribute
    // this is useful when we have multiple input elements in the form, so that we can differentiate between them
  return (
    <div>Input</div>
  )
}
*/

const Input = React.forwardRef( function Input({label, type = 'text', className = '', ...props}, ref){
    const id = useId(); // this is used to generate a unique id for the input element, so that we can use it in the label for attribute
    // this is useful when we have multiple input elements in the form, so that we can
    return(
        <div className='w-full'>
            {label && 
            <label className='block mb-1' 
            // using id to connect label with input element
            // every input element should have a unique id, so that we can use it in the label for attribute
            htmlFor={id}>
            {label}
            </label>}
            <input type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref} // this is used to connect the input element with its state in the form component
            {...props} // this is used to pass any additional props to the input element
            id={id} // this is used to connect label with input element
            />
             </div>
    )
})
export default Input;