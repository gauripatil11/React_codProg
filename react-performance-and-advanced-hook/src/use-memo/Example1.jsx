import React, { useMemo, useState } from "react";
import { findFibonacci } from "./findFibonacci";
import useTime from "./useTime";
import { format } from "date-fns";

function Example1() {
  const [selectedNum, setSelectedNum] = useState(1);
  const time = useTime();
  const fiboNum = useMemo(() => {
    const result = [];
    for (let i = 0; i < selectedNum; i++) {
      result[i] = findFibonacci(i);
    }
    return result;
  }, [selectedNum]);

  return (
    <div>
      <h2>Time : {format(time,'hh:mm:ss a')}</h2>
      <input
        type="number"
        value={selectedNum}
        onChange={(e) => {
          setSelectedNum(e.target.value);
        }}
      />
      <h2>{selectedNum} fibonacci numbers : </h2>
      {fiboNum.join(",")}
    </div>
  );
}

export default Example1;
