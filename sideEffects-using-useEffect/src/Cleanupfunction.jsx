import React, { useEffect, useState } from 'react'

function Cleanupfunction() {
    const[count,setcount] = useState(0)

    useEffect(()=>{
        console.log('inside useEffect');
        return ()=>{
            console.log('inside cleanup');
        }
    })
  return (
    <>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>Increase</button>
    </>
  )
}

export default Cleanupfunction