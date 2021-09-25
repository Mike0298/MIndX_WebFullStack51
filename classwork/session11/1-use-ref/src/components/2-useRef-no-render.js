import React, { useRef, useState } from "react";

const UseRefNoRender = () => {
  const [message, setMessage] = useState("");
  const sent = useRef(0);

  const sendMessage = () => {
    if (sent.current === 3) return alert("Message Limited");
    sent.current++;
  };

  return (
    <div>
      <input className="message"></input>
    </div>
  );
};
