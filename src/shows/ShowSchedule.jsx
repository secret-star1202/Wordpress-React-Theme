import React, { useState } from 'react';
import { default as ShowItem } from './ShowItem';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { default as HeadStuff } from '../reusables/HeadStuff';
import { default as parseDate, toLocalStr, daysOfWeek } from '../utils/date_funcs';

export default function ShowSchedule() {
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

  let [day, setDay] = useState(new Date().getDay()),
    schedule = useApiRequest([], 'schedule', ({ items }, fxn) => {
      let sched = [];
      for (let d = 0; d < 7; d++) {
        let dw = items.filter(show => parseDate(show.start).getDay() === d);
        dw.sort(function (a, b) {
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
        sched.push(dw);
      }
      fxn(sched);
    });

  function active(d) {
    if (d === daysOfWeek[day]) return 'active';
    return '';
  }

  function daysShows() {
    console.log(schedule);
    let retval = schedule[day];
    return retval;
  }

  function handleClick(event) {
    event.preventDefault();
    return function (d) {
      setDay(d);
    };
  }

  function dowButtons(width) {
    return <div className={`shows__days shows__days__${width}`}>
      {daysOfWeek.map(function (di, i) {
        return (<a onClick={e => handleClick(e)(i)}>
            <span className={`shows__day ${active(di)}`}>
              {width === 'narrow' ? di.substring(0, 3) : di}</span>
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
        {schedule.length ? daysShows().map(show => <ShowItem {...{ show }} />) : null}
      </div>
  ];
}