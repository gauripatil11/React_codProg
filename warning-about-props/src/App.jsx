import { useState } from "react"
import Propswarning from "./Propswarning";


function App() {
  const [count,setcount] = useState(0);

  function handlecount(){
    setcount(count+1);
  }
  return (
    <>
      <Propswarning count = {count}/>
      <button
        onClick={handlecount}
      >
        Increase
      </button>
    </>
  )
}

export default App
