import React from "react";
import { createPortal } from "react-dom";
function ReactPortal() {
  return createPortal(
    <>
      <h1>React Portal</h1>
    </>,
    document.getElementById("newroot")
  );
}

export default ReactPortal;
