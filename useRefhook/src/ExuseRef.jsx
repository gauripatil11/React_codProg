import React, { useRef, useState } from "react";

function ExuseRef() {
//   const [username, setusername] = useState("");

//   function handlesubmit(e){
//     e.preventDefault();
//     console.log(username);
//   }
//   return (
//     <form onSubmit={handlesubmit}>
//       <label htmlFor="username">Username </label>
//       <input
//         type="text"
//         id="username"
//         value={username}
//         onChange={(e) => {
//           setusername(e.target.value);
//         }}
//       />
//       <br />
//       <input type="submit" value="Submit" />
//     </form>
//   );

    const name = useRef('')

    const h1element = useRef('');

    return(
        <>
        <form onSubmit={(e)=>{
            e.preventDefault()
            console.log(name);
        }}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" ref={name} onChange={(e)=>{
                name.current = e.target.value
            }}/>
            <br />
            <input type="submit" value="Submit" />
        </form>

        <h1 ref={h1element}>Gauri</h1>
        <button onClick={()=>{
            h1element.current.textContent = 'Nikhil'
        }}>Chnage name</button>
        </>
    )
}

export default ExuseRef;
