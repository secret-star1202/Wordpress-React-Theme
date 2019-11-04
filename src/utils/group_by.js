export default function (items, key) {
  let result = {};
  items.forEach((item) => {
    if (item[key]) {
      let val = item[key];
      if (!result[val]) {
        result[val] = [];
      }
      result[val].push(item);
    }
  });
  return result;
}
