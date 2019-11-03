export default function (str) {
  return str.replace(/&#([0-9]+);/g, function (match, p1) {
    return String.fromCharCode(parseInt(p1, 10));
  });
}
