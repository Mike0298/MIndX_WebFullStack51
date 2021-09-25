import React, { useEffect, useRef } from "react";

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  useEffect(() => {
    console.log("useEffect called");
    console.log(refContainer.current.value);
  }, []);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseRefBasics;
