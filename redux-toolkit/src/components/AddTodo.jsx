import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {

    const[input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault()
        // dispatch reducer ko use karke store ke andar ke values change karta hai
        dispatch(addTodo(input))
        // after the todo has been created or added, the form is cleaned and input is made empty
        setInput('')
    }
  return (
        <form
            onSubmit={addTodoHandler}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
            <input
                type="text"
                className="w-full sm:w-auto bg-gradient-to-r from-slate-700 to-slate-900 placeholder-gray-400
                text-white rounded-lg border border-gray-600 py-2 px-4 focus:outline-none focus:ring-2 
                focus:ring-cyan-400 transition-all duration-300 shadow-md"
                placeholder="Enter a todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white 
                font-semibold py-2 px-6 rounded-lg shadow-lg hover:from-pink-600 hover:to-yellow-600 
                transition-all duration-300"
            >
                Add Todo
            </button>
        </form>
    );
}


export default AddTodo