import React from "react";

// const Button = () => {
//   const num = () => console.log(Math.round(Math.random() * 11));

//   return <button onClick={num}>Click me to Action</button>;
// };

// const Actions = () => {
//   return <Button />;
// };

// const Actions = () => {
//   const copyHandeler = () => {
//     console.log("Stop copying research");
//   };
//   return (
//     <p onCopy={copyHandeler}>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
//       numquam nesciunt esse architecto eos explicabo delectus hic accusamus
//       perferendis itaque qui amet quasi odit, dignissimos vitae ipsum ea,
//       asperiores ratione.
//     </p>
//   );
// };

const Actions = () => {
    const hoverEvent = () => {
        alert("you are under arrest for hovering");
        console.log("Crime accuested");
    }
  return (
      <p onMouseMove ={hoverEvent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rerum officia soluta mollitia totam, maxime exercitationem ducimus maiores fugiat? Laborum impedit amet consequuntur tempora officiis, vitae mollitia et doloribus odio?</p>
  )
}

export default Actions;