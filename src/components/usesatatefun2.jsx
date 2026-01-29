import React from "react";

const Usesatatefun2 = () => {
  const [randomNumbers, setRandomNumbers] = React.useState(0);
  const generateRandomNumber = () => {
    setRandomNumbers(Math.floor(Math.random() * 100));
  };
  return (
    <div>
      <h2>Random Number : {randomNumbers}</h2>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </div>
  );
};

export default Usesatatefun2;
