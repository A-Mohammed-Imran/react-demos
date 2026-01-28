import React from "react";

const Statecomp2 = ({ count, onClickHandler }) => {
  const handelClick = () => onClickHandler();
  return (
    <div>
      <p>Number : {count}</p>
      <p>
        <button onClick={handelClick}>Decrement</button>
      </p>
    </div>
  );
};

export default Statecomp2;
