import React, { useEffect } from 'react'

function Strictmode() {
    console.log('component rendered');

    useEffect(()=>{
        console.log('inside useEffect');

        return () =>{
            console.log('inside Cleanup');
        }
    })
  return (
    <>
    <h1>Hello</h1>
    </>
  )
}

export default Strictmode