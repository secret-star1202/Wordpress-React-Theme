export default function groupBy(items, key) {
  let result = {};
  items.forEach((item) => {
    if (item.hasOwnProperty(key)) {
      let val = item[key];
      if (!result[val]) {
        result[val] = [];
      }
      result[val].push(item);
    }
  });
  return result;
}
