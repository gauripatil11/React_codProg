import React from "react";
import Grandchild from "./Grandchild";

function Child() {
  return (
    <div
      style={{
        backgroundColor: "pink",
        width: "60%",
        height: "60%",
        padding: "2rem",
        margin: "2rem",
      }}
    >
      <h1>child</h1>
      <Grandchild />
    </div>
  );
}

export default Child;
