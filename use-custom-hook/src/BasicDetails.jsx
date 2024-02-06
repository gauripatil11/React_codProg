import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function BasicDetails() {
  const [firstname, setFirstname] = useLocalStorage("firstname");
  const [lastname, setLastname] = useLocalStorage("lastname");

  return (
    <>
      <form>
        <label htmlFor="firstname">Firstname </label>
        <input
          type="text"
          id="firstname"
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="lastname">Lastname </label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
      </form>
      <h1>Firstname : {firstname}</h1>
      <h1>Lastname : {lastname}</h1>
    </>
  );
}

export default BasicDetails;
