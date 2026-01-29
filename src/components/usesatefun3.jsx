import React, { useEffect } from "react";

const Usestatefun3 = () => {
  const [name, setName] = React.useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);
  const HandelChange = (event) => {
    setName(event.target.value);
  };
  const handelClear = () => {
    setName("");
  };
  return (
    <div>
      <h2>Name: {name}</h2>
      <input
        type="text"
        value={name}
        onChange={HandelChange}
        placeholder="Enter your name :"
      />
      <button onClick={handelClear}>Clear Name</button>
    </div>
  );
};

export default Usestatefun3;
