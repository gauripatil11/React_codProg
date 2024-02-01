import React, { useReducer } from "react";
import Todoform from "./Todoform";
import Todos from "./Todos";

function Todolist() {
  function reducer(todos, action) {
    if (action.type === "ADD") {
      return [...todos, action.payload];
    }
    if (action.type === "DELETE") {
      return todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    }
    if (action.type === "TOGGLE") {
      return todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    }
    return todos;
  }

  const initialState = [
    { id: 1, title: "play guitar", completed: true },
    { id: 2, title: "play sport", completed: false },
    { id: 3, title: "learn react", completed: false },
    { id: 4, title: "go to market", completed: false },
  ];

  const [todos, dispach] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Todo List</h1>
      <Todoform dispach={dispach} />
      <Todos todos={todos} dispach={dispach} />
    </>
  );
}

export default Todolist;
