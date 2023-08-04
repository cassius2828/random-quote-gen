import data from "./quotes.json";


const unique = data.filter(
  (obj, index) => data.findIndex((item) => item._id === obj._id) === index
);

export const shorterQuotes = unique.filter((item) => {
  if (item.content.length < 154) {
    return item;
  }
});

export const allTags = data.map(item => {
  return item.tags
})

export let flatArr = [].concat(...allTags);

// * Finally have filtered list of categories
export const filteredTags = flatArr.filter(
  (obj, index) => flatArr.findIndex((item) => item === obj) === index
);


export const categories = filteredTags.sort(function (a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a == b) return 0;
  return a < b ? -1 : 1;
});

