import React from "react";
import Typewriter from "typewriter-effect";

function Type3() {
  return (
    <Typewriter
      options={{
        strings: ["To view complete resume"],
        autoStart: true,
        // loop: true,
        deleteSpeed: 40,
        typeSpeed: 100000,
      }}
    />
  );
}

export default Type3;
