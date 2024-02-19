import {useEffect, useState} from 'react'

function useTime() {
  const [time,setTime] = useState(new Date())

  useEffect(()=>{
    const intervalID = window.setInterval(()=>{
      setTime(new Date())
    },1000)

    return ()=>{
      clearInterval(intervalID);
    }
  },[])

  return time;
}

export default useTime