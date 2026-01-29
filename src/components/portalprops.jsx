import React from "react";

const Portalprops = ({ copied }) => {
  return (
    <section>
      {
        copied  &&  (
            <div style={{
                position:"absolute",
                bottom:"3rem"
            }}>Copied to click board</div>
        )
      }
    </section>
  );
};

export default Portalprops;
