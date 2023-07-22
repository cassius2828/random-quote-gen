import { combineReducers } from "redux";
import { NEW_COLOR, NEW_QUOTE, FADE, NO_FADE } from "./Action";

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

export const rootReducer = combineReducers({
  color: colorReducer,
  quote: quoteReducer,
});
