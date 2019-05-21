var renderSummary = function(summary, numWords) {
  if (summary.indexOf('<') > -1) {
    summary = $.parseHTML(summary).map(node => node.innerText).join(' ');
  }
  var regex = new RegExp('(([^\\s]+\\s\\s*){' + numWords + '})(.*)');
  var match = regex.exec(summary);
  return (match && match[1] || summary) + '…';
};

export default renderSummary;