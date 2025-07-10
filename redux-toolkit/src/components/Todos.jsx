import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
            <h1 className="text-2xl font-bold mb-4 text-center">Todos</h1>
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li 
                        key={todo.id}
                        className="flex justify-between items-center bg-gray-100 p-3 rounded hover:bg-gray-200 transition"
                    >
                        <span className="text-gray-800">{todo.text}</span>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-red-600 hover:text-red-800 font-bold px-2 py-1 rounded"
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos
