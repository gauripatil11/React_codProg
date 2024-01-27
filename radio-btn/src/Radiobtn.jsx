import React, { useState } from "react";

function Radiobtn() {
  const [gender, setgender] = useState("");
  return (
    <div>
      <h1>Radio Button</h1>
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        id="male"
        checked={gender === "male"}
        onChange={() => {
          setgender("male");
        }}
      />
      <br />
      <label htmlFor="female">Female</label>
      <input
        type="radio"
        id="female"
        checked={gender === "female"}
        onChange={() => {
          setgender("female");
        }}
      />
    </div>
  );
}

export default Radiobtn;
