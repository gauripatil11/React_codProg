import React from 'react'
import { ImCross } from "react-icons/im";

function Todo({id,title,completed,togglecompleted,remove}) {
  return (
    <div className="todo">
      <div className="todo-title">
        <input type="checkbox" checked={completed}  onChange={()=>{
            togglecompleted(id)
            
        }}/>
        <p className={`${completed ? "completed" : ""}`}>{title}</p>
      </div>
      <div className="cross-btn" onClick={()=>{
        remove(id)
      }}>
        <ImCross />
      </div>
        
    </div>
  )
}

export default Todo