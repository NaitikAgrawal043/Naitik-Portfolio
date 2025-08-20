import React from "react";
import Typewriter from "typewriter-effect";

function Typee() {
  return (
    <Typewriter
      options={{
        strings: ["LET ME INTRODUCE MYSELF"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Typee;
