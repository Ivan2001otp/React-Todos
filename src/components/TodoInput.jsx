import { useState, useEffect } from "react"
export default function TodoInput(props) {

    const {todoValue,setTodoValue,handleAddTodos}=props

    return (
        <header
            className="mt-4 mb-4 mr-4 ml-4"
        >

            <div
             className="bg-black-300 h-1/4 w-full  justify-center items-center"
            >

                
                    <div>
                        <label
                            className="block  mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-700"
                        >Todo Task</label>

                        <input
                            value={todoValue}
                            type="text"
                            id="enter_todo"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                        hover:border-red-400 hover:
                        rounded-lg focus:ring-blue-500 
                        hover:border-30 focus:border-blue-500 block w-1/4 p-3 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black
                        dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                            placeholder="Enter Todo..."
                            
                            onChange={(e) => {
                                console.log("pressed")
                                setTodoValue(e.target
                                .value)
                            }}


                        />
                    </div>


                    <div>
                        <button
                            type="button"
                            className="text-white bg-gray-900 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-100 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-10 mb-5 "
                            onClick={() => {
                                console.log("Entered")
                                handleAddTodos(todoValue)
                                setTodoValue('');
                            }}
                        >
                            Add

                        </button>

                    </div>


            </div>


        </header>
    )
}