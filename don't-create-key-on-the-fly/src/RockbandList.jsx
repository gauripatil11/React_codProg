import React from 'react'
import { useState } from 'react';
import Rockband from './Rockband';

function RockbandList() {
    const [rockBands, setRockBands] = useState([
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
    ]);

    function addnewBand(){
        setRockBands((prev)=>{
            return [...prev,{name:'new Band',id:crypto.randomUUID()}]
        })
    }

  return (
    <>
        <ul>
            {rockBands.map((rockband)=>{
                // return <Rockband {...rockband} key = {crypto.randomUUID()}/>  bad practice
                return <Rockband {...rockband} key = {rockband.id}/>
            })}
        </ul>
        <button onClick={addnewBand}>Add new Band</button>
    </>
  )
}

export default RockbandList