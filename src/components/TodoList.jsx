import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const { todoList } = props

    return (


        <div
            className='mr-20 ml-20'
        >
            <ul>
                {todoList.map((todoItem, index) => {

                    return <TodoCard
                        {...props}
                        key={index}
                        index={index}
                    >
                        <p>{todoItem}</p>

                    </TodoCard>
                })}
            </ul>
        </div>

    )
}