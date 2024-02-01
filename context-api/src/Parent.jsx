import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        width: "80%",
        height: "80%",
        padding: "2rem",
        margin: "2rem",
      }}
    >
      <h1>parent</h1>
      <Child />
    </div>
  );
}

export default Parent;
