import { INCREASE, DECREASE } from "../types";

const initalState = {
  counter: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initalState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}
