import React from "react";
import { createPortal } from "react-dom";

const Portalprops = ({ copied }) => {
  return createPortal (
    (
      <section>
        {copied && (
          <div
            style={{
              position: "absolute",
              bottom: "3rem",
            }}
          >
            Copied to click board
          </div>
        )}
      </section>
    ),
    document.querySelector("#portel-content")
  );
};

export default Portalprops