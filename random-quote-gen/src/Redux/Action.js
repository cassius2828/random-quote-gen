

export const NEW_COLOR = "NEW_COLOR";
export const NEW_QUOTE = "NEW_QUOTE";
export const FADE = 'FADE';
export const NO_FADE = "NO_FADE";

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

export const newFade = () => {
  return {
    type: FADE,
  }
}

export const removeFade = () => {
  return {
    type: NO_FADE,
  }
}
