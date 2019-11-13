import React from 'react';
import { default as parseDate, toLocalStr } from '../utils/date_funcs';

export default function PlaylistTable({ tracks }) {
  function songsSorted() {
    let retval = tracks;
    if (retval) {
      retval.sort(function (a, b) {
        if (a.start > b.start) {
          return 1;
        }
        if (a.start < b.start) {
          return -1;
        }
        return 0;
      });
      return retval;
    }
    return [];
  }

  return <table className='playlist'>
    <thead>
      <tr className='playlist__info-row'>
        <td> <b>Time</b></td>
        <td><b>Artist</b></td>
        <td><b>Song</b></td>
      </tr>
    </thead>
    <tbody>
      {songsSorted().map(({
        start, artist, song
      }) => <tr key={`${start} | ${artist} - ${artist}`}>
          <td className='playlist__timestamp'>{toLocalStr(parseDate(start))}</td>
          <td className='playlist__artist'>{artist}</td>
          <td className='playlist__title'>{song}</td>
        </tr>)}</tbody></table>;
}
