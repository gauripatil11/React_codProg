import React from "react";

function Todo({ id, title, completed, dispach }) {
  function handleDelete(id) {
    dispach({
      type: "DELETE",
      payload: id,
    });
  }

  function handleToggle(id) {
    dispach({
      type: "TOGGLE",
      payload: id,
    });
  }

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "1rem",
        margin: "1rem",
      }}
    >
      <p>id : {id}</p>
      <p
        style={{
          textDecoration: completed ? "line-through" : "",
        }}
      >
        title : {title}
      </p>
      <p>completed : {completed ? "true" : "false"}</p>

      <button
        onClick={() => {
          handleToggle(id);
        }}
      >
        toggle
      </button>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete Todo
      </button>
    </div>
  );
}

export default Todo;
