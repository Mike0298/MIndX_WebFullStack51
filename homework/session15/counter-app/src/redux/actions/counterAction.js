import { INCREASE, DECREASE } from "../types";

export const increaseCounter = () => (dispatch) => {
  dispatch({ type: INCREASE });
};

export const decreaseCounter = () => (dispatch) => {
  dispatch({ type: DECREASE });
};
