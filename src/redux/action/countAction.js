import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../actionType";

export const incrementCount = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

export const decrementCount = (count) => {
  return {
    type: DECREMENT_COUNTER,
  };
};
