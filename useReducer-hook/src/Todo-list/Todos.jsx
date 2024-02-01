import React from "react";
import Todo from "./Todo";

function Todos({ todos, dispach }) {
  return (
    <>
      {todos.map((todo) => {
        return <Todo {...todo} key={todo.id} dispach={dispach} />;
      })}
    </>
  );
}

export default Todos;
