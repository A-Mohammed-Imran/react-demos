import React from "react";

const Props = () => {
  return (
    <User
      img="src\components\Imag.png"
      name="react"
      age={19}
      isMared={true}
      hobbies={["Cooding", "Rendering", "Executing"]}
    />
  );
};

const User = ({img, name, age, isMared, hobbies}) => {
  return (
    <section>
      <img src={img}alt="react img" />
      <h1> {name}</h1>
      <p> Age : {age}</p>
      <h3> Is maried : {isMared}</h3>
      <p> It's properties : {hobbies}</p>
    </section>
  );
};

export default Props;