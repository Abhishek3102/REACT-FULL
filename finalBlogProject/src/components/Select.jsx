import React, {useId} from 'react'

function Select({
    options,
    label,
    className='',
    ...props
}, ref) {
    const id = useId(); // this is used to generate a unique id for the select element, so that we can use it in the label for attribute
    // this is useful when we have multiple select elements in the form, so that we can
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
        id={id}
        ref={ref} // this is used to connect the select element with its state in the form component
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
        // this is done to check if options has something in it or not. if directly map is used without checking and it does not have any value then app would crash. 
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)