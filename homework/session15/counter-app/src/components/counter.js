import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "../redux/actions/counterAction";

import "./counter.css";

const Counter = () => {
  const counter = useSelector((state) => {
    return state.counter;
  });

  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
      <div>{counter.counter}</div>
      <button onClick={() => dispatch(increaseCounter())}>Increase</button>
    </div>
  );
};

export default Counter;
