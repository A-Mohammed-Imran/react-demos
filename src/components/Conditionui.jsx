import React from "react";

// const Validepassword = () => <h1>Valide password</h1>;
// const Invalidepassword = () => <h1>Invalide password</h1>;

// const Password = ({ isValide }) => {
// //   if (isValide) {
// //     return <Validepassword />;
// //   }
// //   return <Invalidepassword />;
// // return isValide ? <Validepassword /> : <Invalidepassword />;
// };

// const Password = ({ isValide }) =>
//   isValide ? <Validepassword /> : <Invalidepassword />;

const Shop = () => {
  const items = ["laptop", "keyboard", "mouse", "camera"];
  return (
    <div>
      <h1>Cart 🛒</h1>
      {/* {items.length > 0 && (
        <h2> You have {items.length} items in your Cart </h2>
      )} */}
      <ul>
        <h2>Card items</h2>
        {items.map((item) => {
          return <li key={Math.random()}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

const Conditionui = () => {
  //   return <div>{/* <Password isValide={true} /> */}</div>;
  return <Shop />;
};

export default Conditionui;
