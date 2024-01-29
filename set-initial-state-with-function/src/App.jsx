import { useState } from "react"

function rockbandList(){
  const namea = ['a','b','c','d','e','f','i','j','k','l']
  const arr=[];
    for(let i=0;i<10;i++){
    const obj={id:i,name:[namea[i]]}
      arr.push(obj);
    }
    return arr;
}

function App() {
  const [rockBands,setrockband] = useState(rockbandList)
  return (
    <>
      <ul>
            {rockBands.map((rockband)=>{
                
                return <li key={rockband.id}>{rockband.name}</li>
            })}
        </ul>
        <button>Add new Band</button>
    </>
  )
}

export default App
