import React from "react";
import { useState, useEffect } from "react";

const Useeffect1 = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    async function getData() {
      const Responce = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await Responce.json();
      setValue(data);
    }
    getData();
  }, []);

  return (
   <div>
    <ul>
        {value.map(item => (
            <section key={item.id}>
                <li >{item.title}</li>
                <li >{item.body}</li>
            </section>
        ))}
    </ul>
   </div>
  );
};

export default Useeffect1;
