import React, { useState } from 'react';
import ShowItem from './ShowItem.jsx';
import { useApiRequest } from '../hooks';
import { HeadStuff } from '../reusables';
import { parseDate, toLocalStr, daysOfWeek } from '../utils';

export default function ShowSchedule() {
  let { schedule } = useApiRequest({
    schedule: []
  }, 'schedule', ({ items }, fxn) => {
    fxn({ schedule: items });
  });

  let [state, setState] = useState({
    day: new Date().getDay()
  });


  function active(d) {
    if (d === daysOfWeek[state.day]) return 'active';
    return '';
  }

  function toHours(hour, isPm) {
    if (hour === 12 && !isPm) {
      return 0;
    }
    if (hour === 12 && isPm) {
      return 12;
    }
    if (isPm) return hour + 12;
    return hour;
  }

  function daysShows() {
    let retval = schedule.filter(show => parseDate(show.start).getDay() === state.day);
    retval.sort(function (a, b) {
      let aDate = parseDate(a.start), bDate = parseDate(b.start),
        [aTime, aAp] = toLocalStr(aDate).split(' '),
        [bTime, bAp] = toLocalStr(bDate).split(' '),
        [
          ah, am,
        ] = aTime.split(':'), [
          bh, bm,
        ] = bTime.split(':');

      if (toHours(parseInt(ah, 10), aAp === 'PM') < toHours(parseInt(bh, 10), bAp === 'PM')) {
        return -1;
      }
      if (toHours(parseInt(ah, 10), aAp === 'PM') > toHours(parseInt(bh, 10), bAp === 'PM')) {
        return 1;
      }
      if (parseInt(am, 10) < parseInt(bm, 10)) {
        return -1;
      }
      if (parseInt(am, 10) < parseInt(bm, 10)) {
        return 1;
      }
      return 0;
    });
    return retval;
  }

  function handleClick(event) {
    event.preventDefault();
    return function (day) {
      setState({ day });
    };
  }

  function dowButtons(width) {
    return <div className={`shows__days shows__days__${width}`}>
      {daysOfWeek.map(function (day, i) {
        return (<a onClick={e => handleClick(e)(i)}>
            <span className={`shows__day ${active(day)}`}>
              {width === 'narrow' ? day.substring(0, 3) : day}</span>
          </a>
        );
      })}
    </div>;
  }

  return [
      <HeadStuff title={'Show schedule'} />,
      <div className='shows'>
        {dowButtons('wide')}
        {dowButtons('narrow')}
        {daysShows().map(show => <ShowItem {...{ show }} />)}
      </div>
  ];
}
