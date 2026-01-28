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
  // ----------------------------------------------------------
  const [movie, setMovie] = useState([
    {name: "Thor", rating: 9.5},
    {name: "Iron man", rating: 10},
  ])
  return <section>
    {movie.map((m) => (
      <ul key={Math.random()}>
        <li>Movie name : {m.name}</li>
        <li>Rating : {m.rating}</li>
      </ul>
    ))}
  </section>;
};

export default Statehoke;
