import FetchingData from "./FetchingData";
import ExampleuseEffect from "./ExampleuseEffect";
import Cleanupfunction from "./Cleanupfunction";
import { useState } from "react";
import Eventlistner from "./Eventlistner";
import Strictmode from "./Strictmode";
import Focus from "./Focus";

function App() {
  const [showcomponent, setshowcomponent] = useState(true);
  return (
    <>
      {/* <ExampleuseEffect/> */}
      {/* <FetchingData/> */}

      <label htmlFor="showcomponent">Show Component</label>
      <input
        type="checkbox"
        name="showcomponent"
        id="showcomponent"
        checked={showcomponent}
        onChange={() => {
          setshowcomponent((prev)=>{
            return !prev
          })
        }}
      />

      {/* {showcomponent && <Cleanupfunction/>}  */}

      {/* {showcomponent && <Eventlistner/>} */}

      {/* {showcomponent && <FetchingData/>} */}
      
      {/* <Strictmode/> */}

      {showcomponent && <Focus/>}
    </>
  );
}

export default App;
