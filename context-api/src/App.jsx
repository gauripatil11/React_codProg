import { createContext } from "react";
import Parent from "./Parent";
import { useContext } from "react";

export const somecontext = createContext();




function App() {
  function myfunc(){
    console.log('myfunc called');
  }
  return (
    <somecontext.Provider value={myfunc}>
    <div
      style={{
        backgroundColor: "grey",
        height: "100vh",
        padding: "2rem",
        margin: "2rem",
      }}
    >
      <h1>app</h1>
      <Parent />
    </div>
    </somecontext.Provider>
  );
  
}

export function usesome(){
    return useContext(somecontext)
}

export default App;
