import React, { useReducer } from "react";

function reducer(bandList,action) {
    if(action.type === 'ADD'){
        return [...bandList,{name:'newband',id:crypto.randomUUID()}]
    }
}

const initialState = [
  { name: "Queen", id: 1 },
  { name: "Led Zeppelin", id: 2 },
  { name: "The Rolling Stones", id: 3 },
  { name: "The Beatles", id: 4 },
  { name: "AC/DC", id: 5 },
  { name: "Pink Floyd", id: 6 },
  { name: "Nirvana", id: 7 },
  { name: "Guns N' Roses", id: 8 },
  { name: "The Who", id: 9 },
  { name: "Metallica", id: 10 },
];

function RockbandEg() {
   const [bandList,dispach]=useReducer(reducer, initialState);


  return <><ul>
  {bandList.map((band)=>{
    return <li key={band.id}>{band.name}</li>
  })}
  </ul>
  <button onClick={()=>{
    dispach({
        type:'ADD'
    })
  }}>Add New Band</button>
  </>
}

export default RockbandEg;
