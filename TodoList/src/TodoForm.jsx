import React, { useState } from 'react'
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

function TodoForm({ add }) {
    const [title, settitle] = useState('')
    function handlesubmit(e) {
        e.preventDefault()
        if (title.trim().length === 0) {
            toast.info("Please Fill input", {
                autoClose: 2000,
            });
            return;
        }
        const newtodo = {
            id: uuid(),
            "title": title,
            completed: false
        }

        add(newtodo);
        settitle("");
    }
    return (
        <form className="todoForm" onSubmit={handlesubmit}>
            <input className="todoForm__input" type="text" value={title} onChange={(e) => { settitle(e.target.value) }} />
            <button className="todoForm__btn" type='submit'>Add</button>
        </form>

    );
}

export default TodoForm