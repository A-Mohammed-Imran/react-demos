import Some from "./components/some";
import Greeting from "./components/Greeting";
import Props from "./components/Props";
import Card from "./components/Card";
import Conditionui from "./components/Conditionui";
import Style from "./components/Style";
// import "./index.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import Action from "./components/actions";
import Statehoke from "./components/Statehoke";
import Statecomp1 from "./components/statecomp1";
import Statecomp2 from "./components/statecomp2";
import Usesatefun from "./components/usesatefun";
import Usesatatefun2 from "./components/usesatatefun2";
import Usestatefun3 from "./components/usesatefun3";
import Portel from "./components/portel";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    // <section>
    //   <div className="app">
    //     {/* <Some /> */}
    //     {/* <Greeting /> */}
    //     {/* <Props /> */}
    //     {/* <Card>
    //     <h1>This is a card component form the exported component</h1>
    //     <p>
    //       This card para text showes means the components of a cardnfrom the
    //       exported section is working
    //     </p>
    //   </Card> */}
    //     {/* <Conditionui /> */}

    //     {/* <div className="head">
    //       <h1>
    //         Welcome to React <FaReact />
    //       </h1>
    //     </div> */}
    //   </div>
    // </section>
    // {/* <Actions /> */}
    <section>
      {/* <Statehoke /> */}
      {/* <Statecomp1 count={count} onClickHandler ={() => setCount(count + 1)} />
      <Statecomp2 count={count} onClickHandler ={() => setCount(count + 1)} /> */}
      {/* <Usesatefun /> */}
      {/* <Usesatatefun2 /> */}
      {/* <Usestatefun3 /> */}
      <Portel />
    </section>
  );
}
export default App;
