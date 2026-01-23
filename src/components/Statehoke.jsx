import React from "react";
import { useState } from "react";

const Statehoke = () => {
  //   const [num, setNum] = useState(10);
  //   const ince = () => {
  //     setNum(num + 1);
  //   };
  //   const decr = () => {
  //     setNum(num - 1);
  //   };
  //   return (
  //     <div>
  //       <h1>{num}</h1>
  //       <button onClick={ince}>+</button>
  //       <button onClick={decr}>-</button>
  //     </div>
  //   );
  // ----------------------------------------------------------
  // const [friends, stateFriends] = useState(["azhan", "mohathasim", "Nadeem"]);
  // const addFriend = () => {
  //   stateFriends([...friends, "imran"]);
  // };
  // const removeFriends = () => {
  //   stateFriends(friends.filter((f) => f != "imran"));
  // };
  // const updateFriends = () => {
  //   stateFriends(friends.map((f) => (f === "Nadeem" ? "Z Nadeem" : f)));
  // };
  // const updateremFriends = () => {
  //   stateFriends(friends.map((f) => (f === "Z Nadeem" ? "Nadeem" : f)));
  // };
  // return (
  //   <section>
  //     <ul>
  //       {friends.map((f) => (
  //         <li key={Math.random()}>{f}</li>
  //       ))}
  //       <button onClick={addFriend}>Add friend</button>
  //       <button onClick={removeFriends}>Remove friend</button>
  //       <button onClick={updateFriends}>Update friend</button>
  //       <button onClick={updateremFriends}>remove Update</button>
  //     </ul>
  //   </section>
  // );
  const [movi, setMovi] = useState({
    name: "Your name",
    rating: 9,
  });
  const updateRat = () => {
    const copyMovi = {
      ...movi,
      rating: 9.2,
    };
    setMovi(copyMovi);
  };
  return (
    <section>
      <h1>Movi Name :{movi.name}</h1>
      <h1>Rating :{movi.rating}</h1>
      <button onClick={updateRat}>Change rating</button>
    </section>
  );
};

export default Statehoke;
