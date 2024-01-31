import React, { useEffect } from 'react'

function handle(e){
    console.log(e.movementX,e.movementY);
}

function Eventlistner() {
    useEffect(()=>{
        document.addEventListener('mousemove',handle)
        return ()=>{
            document.removeEventListener('mousemove',handle)
            console.log('cleanup');
        }
    },[])
    
  return(
    <h1>Event Listener</h1>
  )
}

export default Eventlistner