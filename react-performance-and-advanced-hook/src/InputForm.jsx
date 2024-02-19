import { useState } from 'react'

function InputForm({children}) {
    const [username,setUsername] = useState('')
    console.log('input');
  return (
    <form >
        <input type="text" id='username'value={username} onChange={(e)=>{
            setUsername(e.target.value);
        }} />
        <br />
        <button onClick={()=>{setUsername('')}}>Clear</button>
        {children}
    </form>
  )
}

export default InputForm