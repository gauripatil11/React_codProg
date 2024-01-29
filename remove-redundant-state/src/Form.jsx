import React, { useState } from "react";
import ShowFN from "./ShowFN";

function Form() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const fullname = firstname +" "+ lastname
  return (
    <>
      <h1>Form</h1>
      <form action="">
        <label htmlFor="firstname">Firstname </label>
        <input
          type="text"
          id="firstname"
          value={firstname}
          onChange={(e) => {
            setfirstname(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="lastname">Lastname </label>
        <input type="text" id="lastname" value={lastname} onChange={(e)=>{
            setlastname(e.target.value);
        }}/>
      </form>
      <h1>User Details</h1>
      <p>FirstName : {firstname}</p>
      <p>Lastname : {lastname}</p>
      <p>Fullname : <ShowFN fullname={fullname}/></p>
    </>
  );
}

export default Form;
