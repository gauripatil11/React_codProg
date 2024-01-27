import { useState } from "react"
import TodoForm from "./TodoForm"
import Todos from "./Todos"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";


function App() {
  const [todolist, settodolist] = useState([
    { id: 1, title: 'learn React', completed: false },
    { id: 2, title: 'learn programming', completed: true },
    { id: 3, title: 'go to gym', completed: false },
  ])

  function add(newtodo) {
    console.log(newtodo)
    settodolist((prev) => {
      return [...prev, newtodo]
    })
  }

  function remove(id) {
    settodolist((prev) => {
      return prev.filter((todo) => {
        if (todo.id !== id) {
          return todo
        }
      })
    })
  }

  function togglecompleted(id) {
    settodolist((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        else {
          return { ...todo }
        }
      })
    })
  }
  return (
    <div className="container">
      <h1 className="main-title">Todo List</h1>
      <ToastContainer/>
      <TodoForm add={add} />
      <Todos todolist={todolist} togglecompleted={togglecompleted} remove={remove} />
    </div>

  )
}

export default App
