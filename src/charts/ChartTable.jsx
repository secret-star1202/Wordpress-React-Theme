import React from 'react';

function parse(data) {
  let retval = [], lines = data.split('\n');
  for (let l = 0; l < lines.length; l++) {
    if (lines[l].length) {
      retval.push(lines[l].replace(/\\,/g, '，').split(',').map(
        line => line.replace(/，/g, ',')
      ));
    }
  }
  return retval;
}

export default function ({ data }) {
  let tableVals = parse(data), [header, ...body] = tableVals;

  return <table className="playlist">
    <thead>
      <tr className="playlist__info-row">{header.map(col => <td>{col}</td>)}</tr>
    </thead>
    <tbody>
      {body.map(row => <tr>{row.map(col => <td>{col.replace(/"/g, '')}</td>)}</tr>)}
    </tbody>
  </table>;
}
