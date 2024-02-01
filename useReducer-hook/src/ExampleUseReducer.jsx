import React, { useReducer } from "react";

function reducer(count,action) {
    if(action.type === 'ADD'){
        return count+1;
    }
    if(action.type === 'RESET'){
        return 0;
    }
    if(action.type === 'SUB'){
        return count-1;
    }
}

function ExampleUseReducer() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch({
            type: "ADD",
          });
        }}
      >
        Increase
      </button>
      <button onClick={() => {
          dispatch({
            type: "RESET",
          });
        }}>Reset</button>
      <button onClick={() => {
          dispatch({
            type: "SUB",
          });
        }}
      >Decrease</button>
    </>
  );
}

export default ExampleUseReducer;


