// import {useContext} from "react";
// import { somecontext } from "./App";

import { usesome } from "./App";


function Grandchild() {
    // const returnedvalue = useContext(somecontext);
    const myfunc = usesome();
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "40%",
        height: "40%",
        padding: "2rem",
        margin: "2rem",
      }}
    >
      <h1>grandchild</h1>
      <button onClick={myfunc}>Myfunc</button>
    </div>
  );
}

export default Grandchild;
