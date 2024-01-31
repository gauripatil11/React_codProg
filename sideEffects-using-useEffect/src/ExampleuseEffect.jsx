import React, { useEffect, useState } from "react";

function ExampleuseEffect() {
    console.log('component rendered');
  const [count, setcount] = useState(0);
  const [count1,setcount1] = useState(0);
  useEffect(()=>{
    console.log('inside useEffect');
  },[count])
  return (
    <>

      <h1>{count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increase
      </button>
        <br /><br />
      <h1>{count1}</h1>
      <button
        onClick={() => {
          setcount1(count1 + 1);
        }}
      >
        Increase
      </button>
    </>
  );
}

export default ExampleuseEffect;
