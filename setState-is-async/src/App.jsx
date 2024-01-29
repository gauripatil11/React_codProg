import { useState } from "react";

function App() {
  const [count, setcount] = useState(0);
  function handlecount(){
    setcount(count+1);
    console.log(count);

    // setcount(count+1);
    // setcount(count+1);
    // setcount(count+1);

    // setcount(prev=>prev+1)
    // setcount(prev=>prev+1)
    // setcount(prev=>prev+1)
    
  }
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={handlecount}
      >
        Increase
      </button>
    </>
  );
}

export default App;
