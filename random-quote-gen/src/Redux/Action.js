

export const NEW_COLOR = "NEW_COLOR";
export const NEW_QUOTE = "NEW_QUOTE";

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
