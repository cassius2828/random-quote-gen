import { combineReducers } from "redux";
import { NEW_COLOR, NEW_QUOTE, FADE, NO_FADE } from "./Action";
import {faD} from "@fortawesome/free-solid-svg-icons";

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
      return Math.floor(Math.random() * 16);
    default:
      return state;
  }
};

// const quoteState = colors[0]

const quoteReducer = (state = 0, action) => {
  switch (action.type) {
    case NEW_QUOTE:
      return Math.floor(Math.random() * 1643);
    default:
      return state;
  }
};

const fadeState = 'quote-box'

// fadereducer
const fadeReducer = (state = fadeState, action) => {
  switch (action.type) {
    case FADE:
      return 'fade';
    default:
      return state;
  }
};

const noFadeReducer = (state = fadeState, action) => {
  switch(action.type) {
case NO_FADE:
  return state;
  default:
    return state;
  }
}

export const rootReducer = combineReducers({
  color: colorReducer,
  quote: quoteReducer,
  fade: fadeReducer,
  noFade: noFadeReducer
});
