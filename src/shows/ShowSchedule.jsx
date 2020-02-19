import React, { useState } from 'react';
import { default as ShowItem } from './ShowItem';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { default as HeadStuff } from '../reusables/HeadStuff';
import { daysOfWeek } from '../utils/date_funcs';

export default function ShowSchedule() {
  let [day, setDay] = useState(new Date().getDay()),
    schedule = useApiRequest([], 'schedule');

  function active(d) {
    if (d === daysOfWeek[day]) return 'active';
    return '';
  }

  function daysShows() {
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
        return (<a onClick={(e) => handleClick(e)(i)}>
            <span className={`shows__day ${active(di)}`}>
              {width === 'narrow' ? di.substring(0, 3) : di}</span>
          </a>
        );
      })}
    </div>;
  }

  return [
      <HeadStuff title='Show Schedule' />,
      <div className='shows'>
        {dowButtons('wide')}
        {dowButtons('narrow')}
        {schedule.length ? <table>
          <tbody>
            {daysShows().map((show) => <ShowItem {...{ show }} />)}
          </tbody>
        </table> : null}
      </div>
  ];
}
