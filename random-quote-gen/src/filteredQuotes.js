import data from "./quotes.json";


const unique = data.filter(
  (obj, index) => data.findIndex((item) => item._id === obj._id) === index
);

export const shorterQuotes = unique.filter((item) => {
  if (item.content.length < 154) {
    return item;
  }
});
