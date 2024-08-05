import React from 'react'
import {useState,useEffect} from "react"
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


const App = () => {

  const [todoValue,setTodoValue]=useState('')
  const [todoList,setTodoList]=useState([])


  function handleAddTodos(newTodo){
    const newTodoList = [newTodo,...todoList]
    persistData(newTodoList)
    setTodoList(newTodoList)
  }

  function handleEditTodos(index){
    const valueToBeEdited = todoList[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index)
  }

  function handleDeleteTodo(index){
    const newTodoList = todoList.filter((item,Tindex)=>{
      return Tindex!==index;
    })

    setTodoList(newTodoList);
  }

  function persistData(newList){
    localStorage.setItem("todos",JSON.stringify({todos:newList}))
  }

  useEffect(()=>{
    if(!localStorage)return;
    let localTodos = localStorage.getItem("todos")
    if(!localTodos)return;
    
    localTodos = JSON.parse(localTodos).todos

    setTodoList(localTodos)
  },[])


  return (
    <>
      <TodoInput
      todoValue={todoValue}
      setTodoValue={setTodoValue}
      handleAddTodos={handleAddTodos}
      />

      <TodoList
        handleEditTodos={handleEditTodos}
        handleDeleteTodo = {handleDeleteTodo}
        todoList={todoList}
      />
    </>
  )
}

export default App

