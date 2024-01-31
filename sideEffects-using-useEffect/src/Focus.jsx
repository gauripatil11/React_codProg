import React, { useEffect, useRef } from 'react'


function Focus() {
    const input = useRef('')
    useEffect(()=>{
        input.current.focus();
    },[])
  return (
    <div>
        <br />
    <label htmlFor="username">Username : </label>
        <input type="text" id='username' ref={input}/>
    </div>
  )
}

export default Focus