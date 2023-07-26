import data from "./quotes.json";

export const shorterQuotes = data.filter((item) => {
  if (item.content.length < 154) {
    return item;
  }
});
