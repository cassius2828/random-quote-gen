import { combineReducers } from "redux";
import { NEW_COLOR, NEW_QUOTE } from "./Action";
import { randomQuoteNum } from "../Text";

export const randomColorNum = Math.floor(Math.random() * 11);

// copy of state

// const defaultState =
// const colors = [
//   "red",
//   "orange",
//   "blue",
//   "skyblue",
//   "lime",
//   "coral",
//   "tan",
//   "yellow",
//   "grey",
//   "black",
//   "pink",
// ];

// const colorState = colors[0];

// reducers
const colorReducer = (state = 0, action) => {
  switch (action.type) {
    case NEW_COLOR:
      return randomColorNum;
    //   return colors[randomColorNum];
    default:
      return state;
  }
};

// const quoteState = colors[0]

const quoteReducer = (state = 0, action) => {
  switch (action.type) {
    case NEW_QUOTE:
      return randomQuoteNum;
    // return colors[randomQuoteNum];
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  color: colorReducer,
  quote: quoteReducer,
});
