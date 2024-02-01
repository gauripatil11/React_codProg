import { useState } from "react";

function Todoform({ dispach }) {
  const [title, settitle] = useState("");
  function handlesubmit(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      return;
    }
    const newtodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    dispach({
      type: "ADD",
      payload: newtodo,
    });
    settitle("");
  }
  return (
    <form onSubmit={handlesubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          settitle(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Todoform;
