import React from "react";
import Portalprops from "./portalprops";

const Portel = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [copied, setCopied] = React.useState(false);
  const copyHandel = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter somthing to copy"
        />
        <button onClick={copyHandel}>Copy Text</button>
        <Portalprops copied={copied} />
      </div>
    )
  );
};

export default Portel;
