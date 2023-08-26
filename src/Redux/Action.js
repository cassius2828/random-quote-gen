export const NEW_COLOR = "NEW_COLOR";
export const NEW_QUOTE = "NEW_QUOTE";
export const PREV_QUOTE = "NEW_QUOTE";
export const NEXT_QUOTE = "NEW_QUOTE";
export const INCREMENT = "INCREMENT";
export const INCREMENT_COLOR = "INCREMENT_COLOR";
export const DECREMENT = "DECREMENT";
export const DECREMENT_COLOR = "DECREMENT_COLOR";
export const JUMP_STATE = "JUMP_STATE";
export const DARK_MODE = "DARK_MODE";
export const LIGHT_MODE = "LIGHT_MODE";
export const GRAB_CARD = "GRAB_CARD";

// action creators
export const newColor = () => {
  return {
    type: NEW_COLOR,
  };
};

export const newQuote = () => {
  return {
    type: NEW_QUOTE,
  };
};

export const prevQuote = () => {
  return {
    type: PREV_QUOTE,
  };
};

export const nextQuote = () => {
  return {
    type: NEXT_QUOTE,
  };
};

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const decrementColor = () => {
  return {
    type: DECREMENT_COLOR,
  };
};

export const incrementColor = () => {
  return {
    type: INCREMENT_COLOR,
  };
};

export const jumpState = () => {
  return {
    type: JUMP_STATE,
  };
};

export const goDarkMode = () => {
  return {
    type: DARK_MODE,
  };
};

export const goLightMode = () => {
  return {
    type: LIGHT_MODE,
  };
};

