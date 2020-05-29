import React, { useEffect } from 'react';
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

  useEffect(function () {
    if (document.querySelector('style#table-pag')) {
      document.querySelector('style#table-pag').innerHTML = [0, 1, 2].map((c, i) => {
        let actualWidth = document.querySelector(
          `tbody td:nth-child(${i + 1})`
        )
          ? Math.max(document.querySelector(
            `tbody td:nth-child(${i + 1})`
          ).clientWidth,
          document.querySelector(
            `thead td:nth-child(${i + 1})`
          ).clientWidth) : document.querySelector(
            `thead td:nth-child(${i + 1})`
          ).clientWidth;

        return `thead td:nth-child(${i + 1}),
          tbody td:nth-child(${i + 1}){
            min-width: ${actualWidth}px;
            max-width: ${actualWidth}px;
          }`;
      }).join('\n');
    }
  }, []);

  return [<style id='table-pag'/>,
    <table className='playlist'>
    <thead style={{ display: 'block' }}>
      <tr className='playlist__info-row'>
        <td><b>Time</b></td>
        <td><b>Artist</b></td>
        <td><b>Song</b></td>
      </tr>
    </thead>
    <tbody style={{ display: 'block', maxHeight: '1000px', overflow: 'scroll' }}>
      {songsSorted().map(({
        start, artist, song
      }) => <tr>
          <td className='playlist__timestamp'>{toLocalStr(parseDate(start))}</td>
          <td className='playlist__artist'>{artist}</td>
          <td className='playlist__title'>{song}</td>
        </tr>)}</tbody></table>];
}
