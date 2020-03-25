export default function (summary, numWords) {
  let newSum = summary, match = null;
  const regex = new RegExp(`(([^\\s]+\\s\\s*){${numWords}})(.*)`);
  if (summary.indexOf('<') > -1) {
    newSum = $.parseHTML(summary).map(({ innerText }) => innerText).join(' ');
  }
  match = newSum.match(regex);
  return `${match ? match[1] : newSum}…`;
}
