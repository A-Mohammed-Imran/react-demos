import React from "react";
import { useState, useEffect } from "react";

const Useeffect = () => {
  const [value, setValue] = useState(0);
  const [say, setSay] = useState(0);
  useEffect(() => {
    if (say > 0) {
      console.log("useEffect called");
      document.title = `You clicked ${say} times`;
    }
  }, [say]);
  return (
    <div>
      <h2>Incriment/Corrent value : {say}</h2>
      <button
        onClick={() => {
          setSay(say + 1);
        }}
      >
        Click to increases
      </button>
    </div>
  );
};

export default Useeffect;
