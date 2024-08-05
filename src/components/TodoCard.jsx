import React from 'react'

export default function TodoCard(props){
    const {children,handleDeleteTodo,index,handleEditTodos} = props


    return (
       <li className='todoItem'>
        <div className= 'p-4 text-xl font-medium rounded-md border-red-400 border-8 mb-4 ml-4 mr-4 mb-8'>
        {children}
        
        
        <div
            className='actionContainer'
        >
            <button
                className='mr-8'
                onClick={()=>{
                    handleEditTodos(index)
                }}
            >

            <i
                style={{ paddingRight: '3px' }}
                className="fa-solid fa-pen-to-square"></i>
            </button>

            <button
                onClick={()=>{
                    handleDeleteTodo(index)
                }}
            >

<i className="fa-solid fa-trash"></i>
            </button>
        </div>
        
        </div>

        
       </li>
    )
}