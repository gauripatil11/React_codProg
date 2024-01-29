import React from "react";

function Whitespace({ name }) {
  return (
    <h2>
      Hello {" "}<span style={{ color: "pink" }}>{name}</span>{" "} !!
    </h2>
  );
}

export default Whitespace;
