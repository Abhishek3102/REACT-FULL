import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // useState hooks to store the state of the password generator
  const [length, setLength] = useState(8)  // Length of the password, default is 8
  const [numberAllowed, setNumberAllowed] = useState(false)  // Whether numbers are allowed in the password
  const [charactersAllowed, setCharactersAllowed] = useState(false)  // Whether special characters are allowed in the password
  const [password, setPassword] = useState("")  // Generated password

  // useRef hook to reference the password input field for copying to clipboard
  // useRef does not trigger re-renders when the reference changes
  const passwordRef = useRef(null)  // Reference to the password input field


  // useCallback hook to memoize the password generator function
  // This ensures that the function does not get recreated on every render unless the dependencies change
  const passwordGenerator = useCallback(() => {
    let pass = ""  // String to store the generated password
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  // Default set of characters to use for password generation
    
    // If numbers are allowed, add numbers to the string of available characters
    if(numberAllowed) str += "0123456789"
    // If special characters are allowed, add them to the string of available characters
    if (charactersAllowed) str += "!@#$%^&*()_+-={}~`[]|:;'"

    // Generate the password based on the selected length and available characters
    for(let i=1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)  // Randomly pick an index from the string of characters
      pass += str.charAt(char)  // Add the character at the chosen index to the password string
    }
    setPassword(pass)  // Set the generated password

  // useCallback dependencies:
  // The function will only be redefined if `length`, `numberAllowed`, `charactersAllowed`, or `setPassword` change
  }, [length, numberAllowed, charactersAllowed, setPassword])  // Dependencies for the memoized function

  // useCallback hook for the copy-to-clipboard function
  // This function is also memoized to avoid unnecessary re-creations on re-renders
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()  // Select the text inside the input field
    // passwordRef.current?.setSelectionRange(4, 6)  // Optional, can be used for selecting a specific part of the text (uncomment if needed)
    window.navigator.clipboard.writeText(password)  // Copy the password to the clipboard
  }, [password])  // Only recreate the function when the password changes


  // useEffect hook to automatically regenerate the password when any of the dependencies change
  // This is where the actual password generation logic is triggered
  useEffect(() => {
    passwordGenerator()  // Regenerate password every time length, numberAllowed, or charactersAllowed changes
  }, [length, numberAllowed, charactersAllowed, passwordGenerator])  // Dependencies for the effect

  return (
    <>
      {/* <h2 className='text-xl text-white'>Random password Generator using some hooks</h2>
      <br></br> */}
      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg p-6 my-8 bg-gray-800'>
        <h1 className='text-white text-2xl font-semibold text-center mb-6'>Password Generator</h1>
        
        {/* Input field for showing the generated password */}
        {/* The value of the input is bound to the `password` state */}
        <div className='flex shadow-md rounded-lg overflow-hidden mb-6'>
          <input
            type='text'
            value={password}  // Display the generated password here
            className='outline-none w-full py-3 px-4 bg-gray-100 text-black text-lg font-medium placeholder-gray-400'
            placeholder='Your password will appear here'
            readOnly  // The input is read-only because the password is not supposed to be typed in directly
            ref={passwordRef}  // This is where the useRef hook is applied to get a reference to the input element
          />
          
          {/* Copy Button */}
          {/* The button will copy the password to the clipboard when clicked */}
          <button onClick={copyPasswordToClipboard}  className='outline-none bg-blue-700 text-white hover:bg-blue-900 px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        
        {/* Controls for password length and options to allow numbers and special characters */}
        <div className='flex text-sm gap-x-2'>
          {/* Slider for adjusting password length */}
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
            <label className='text-white'>Length: {length}</label>
          </div>

          {/* Checkbox to allow or disallow numbers in the password */}
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => {
              setNumberAllowed((prev) => !prev);  // Toggle the numberAllowed state when the checkbox is clicked
            }} />
            <label htmlFor='numberInput' className='text-white'>Numbers</label>
          </div>
          
          {/* Checkbox to allow or disallow special characters in the password */}
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charactersAllowed} id="characterInput" onChange={() => {
              setCharactersAllowed((prev) => !prev);  // Toggle the charactersAllowed state when the checkbox is clicked
            }} />
            <label htmlFor='characterInput' className='text-white'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
