import React from 'react';
import { default as parse } from 'csv-parse/lib/es5/sync';

export default function ChartTable({ data }) {
  let tableVals = parse(data, { bom: true, columns: true });

  let header = Object.keys(tableVals[0]);

  return <table>
    <thead>
      <tr>{header.map(col => <td>{col}</td>)}</tr>
    </thead>
    <tbody>
      {tableVals.map(row => <tr>{Object.keys(row).map(col => <td>{row[col]}</td>)}</tr>)}
    </tbody>
  </table>;
}
