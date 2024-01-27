import React, { useState } from "react";

function Form() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [password, setpassword] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    console.log(username,email,phonenumber,password);
  }
  return (
    <form onSubmit={handlesubmit}>
      <label htmlFor="username">Username </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />
      <br />
      <br />
      <label htmlFor="email">Email </label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <br />
      <br />
      <label htmlFor="phonenumber">Phone Number </label>
      <input
        type="text"
        id="phonenumber"
        value={phonenumber}
        onChange={(e) => {
          setphonenumber(e.target.value);
        }}
      />
      <br />
      <br />
      <label htmlFor="password">Password </label>
      <input
        type="text"
        id="password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
