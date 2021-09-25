import React, { useState, useEffect } from "react";

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("call useEffect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("clean up");
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <div>
      <h1>Clean up</h1>
      <h2>{size}</h2>
    </div>
  );
};

export default UseEffectCleanUp;
