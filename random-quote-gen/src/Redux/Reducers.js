import { combineReducers } from "redux";
import { NEW_COLOR, NEW_QUOTE, INCREMENT, DECREMENT, INCREMENT_COLOR, DECREMENT_COLOR } from "./Action";
import { useSelector } from "react-redux";

  // const 0 = useSelector((state) => state.quote);
let randyC;

const colorReducer = (state = 0, action) => {
  switch (action.type) {
    case NEW_COLOR:
      return (randyC = Math.floor(Math.random() * 16));
    case INCREMENT_COLOR:
      return (randyC = randyC + 1);
    case DECREMENT_COLOR:
      return (randyC = randyC - 1);
    default:
      return state;
  }
};

// const quoteState = colors[0]
let randyQ;
const quoteReducer = (state = 0, action) => {
  switch (action.type) {
    case NEW_QUOTE:
      return (randyQ = Math.floor(Math.random() * 1643));
    case INCREMENT:
      return (randyQ = randyQ + 1);
    case DECREMENT:
      return (randyQ = randyQ - 1);
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  color: colorReducer,
  quote: quoteReducer,
});
