import React from 'react';

function cap(str) {
  if (str.indexOf(' ') <= -1) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
  }
  return str.split(' ').map(cap).join(' ');
}

function parse(data) {
  let retval = [], lines = data.split('\n');
  for (let l = 0; l < lines.length; l++) {
    if (lines[l].length) {
      let line = lines[l].replace(/\\,/g, '，').split(',').map(
        (ln) => ln.replace(/，/g, ',')
      );

      if (line.length === 5) {
        let realLine = [];
        let i = 0;
        for (i; i < 5; i++) {
          if (line[i].startsWith(' ')) {
            realLine[realLine.length - 1] = `${line[i].substring(1)} ${realLine[realLine.length - 1]}`;
          } else realLine.push(line[i]);
        }
        line = realLine;
      }

      retval.push(line);
    }
  }
  return retval;
}

export default function ({ data }) {
  let tableVals = typeof data === 'string' ? parse(data) : data,
    [header, ...body] = tableVals;
  console.log(tableVals);

  return <table className="playlist">
    <thead>
      <tr className="playlist__info-row">{header.split(',').map(
        (col) => <td>{col}</td>
      )}</tr>
    </thead>
    <tbody>
      {body.map((row) => <tr>{row.split(',').map(
        (col, i) => <td>{i === 1
          ? cap(col.replace(/"/g, '')) : col.replace(/"/g, '')}</td>
      )}</tr>)}
    </tbody>
  </table>;
}
