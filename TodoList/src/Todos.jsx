import React from 'react'
import Todo from './Todo'

function Todos({todolist,togglecompleted,remove}) {
  return (
    <div>
        {todolist.map((todo)=>{
            return <Todo {...todo} key = {todo.id} togglecompleted={togglecompleted} remove={remove}/>
        })}
    </div>
  )
}

export default Todos