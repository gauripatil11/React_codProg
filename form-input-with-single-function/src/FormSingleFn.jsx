import React, { useState } from "react";

function FormSingleFn() {
  const [form, setform] = useState({
    username: "",
    email: "",
    phonenumber: "",
    password: "",
  });

  function handlesubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  function handlechange(e){
    setform((prev)=>{
        return {...prev,[e.target.id]:e.target.value}
    })
  }

  const{username,email,phonenumber,password} = form;

  return (
    <form onSubmit={handlesubmit}>
      <label htmlFor="username">Username </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handlechange}
      />
      <br />
      <br />
      <label htmlFor="email">Email </label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={handlechange}
      />
      <br />
      <br />
      <label htmlFor="phonenumber">Phone Number </label>
      <input
        type="text"
        id="phonenumber"
        value={phonenumber}
        onChange={handlechange}
      />
      <br />
      <br />
      <label htmlFor="password">Password </label>
      <input
        type="text"
        id="password"
        value={password}
        onChange={handlechange}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormSingleFn;
