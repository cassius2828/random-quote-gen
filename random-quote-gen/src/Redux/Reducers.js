import { combineReducers } from "redux";
import {
  NEW_COLOR,
  NEW_QUOTE,
  INCREMENT,
  DECREMENT,
  INCREMENT_COLOR,
  DECREMENT_COLOR,
  JUMP_STATE,
  LIGHT_MODE,
  DARK_MODE,
} from "./Action";

// const 0 = useSelector((state) => state.quote);
let randyC = 0;

const colorReducer = (state = randyC, action) => {
  switch (action.type) {
    case NEW_COLOR:
      return (randyC = Math.floor(Math.random() * 16));
    case INCREMENT_COLOR:
      return randyC > 14 ? (randyC = 0) : (randyC = randyC + 1);
    case DECREMENT_COLOR:
      return randyC <= 0 ? (randyC = 15) : (randyC = randyC - 1);
    default:
      return state;
  }
};

let randyQ = 0;
const quoteReducer = (state = randyQ, action) => {
  switch (action.type) {
    case NEW_QUOTE:
      return (randyQ = Math.floor(Math.random() * 934));
    case INCREMENT:
      return randyQ > 932 ? (randyQ = 0) : (randyQ = randyQ + 1);
    case DECREMENT:
      return randyQ <= 0 ? (randyQ = 933) : (randyQ = randyQ - 1);
    default:
      return state;
  }
};

const toggleLightModeReducer = (state = true, action) => {
  switch (action.type) {
    case DARK_MODE:
      return (state = false);
    case LIGHT_MODE:
      return (state = true);
    default:
      return state;
  }
};

// const jumpStateReducer = (state, action) => {
//   switch(action.type) {
//     case JUMP_STATE:
//       return
//   }
// }

export const rootReducer = combineReducers({
  color: colorReducer,
  quote: quoteReducer,
  light: toggleLightModeReducer,
});
