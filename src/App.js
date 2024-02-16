import React, { useState } from 'react'
import "./App.css"
import TodoInputs from './components/TodoInputs'
import Todolist from './components/TodoList'

const App = () => {
  const[listTodo, setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
    setListTodo([...listTodo,inputText]);
  }
  // for delete function
  const deleteListItem = (key)=>{
    //creating new variables
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    //updating listtodo
    setListTodo([...newListTodo])
  }
  return (
   <div className='main-container'>
    <div className='center-container'>
      {/* passing as a properties */}
      <TodoInputs addList={addList} />
      <h1 className='app-heading'>TODO</h1>
      <hr/>
      {listTodo.map((listItem,i)=>{
        return(
          <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
        )
      })}
      
    </div>
   </div>
  )
}

export default App;

