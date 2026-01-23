import React from "react";
const Greeting = () => {
  const number = [1, 2, 3, 4, 5];
  const person = [
    { name: "imran", mail: "imran@example.com", location: "USA" },
    { name: "Azhan", mail: "azhan@example.com", location: "UK" },
    { name: "Mohathaseem", mail: "mohathaseem@example.com", location: "Canada" },
  ];

  return (
    <main>
      {number.map((num) => (
        <ul key={Math.random()}>
          <li>{num}</li>
        </ul>
      ))}
      {person.map(({name, mail, location}) => (
        <ul key={Math.random()}>
          <li>{name}</li>
          <li>{mail}</li>
          <li>{location}</li>
        </ul>
      ))}
    </main>
  );
};
export default Greeting;
