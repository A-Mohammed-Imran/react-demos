import React from "react";

const Usesatefun = () => {
  const [count, setCount] = React.useState(() => {
    const initialvalue = 0;
    return initialvalue;
  });
  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <p>initial value :{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Usesatefun;
