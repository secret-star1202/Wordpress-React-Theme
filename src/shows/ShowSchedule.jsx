import React, { useState } from 'react';
import { default as ShowItem } from './ShowItem';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { default as HeadStuff } from '../reusables/HeadStuff';
import { daysOfWeek } from '../utils/date_funcs';
import { default as parseDate, toLocalStr } from '../utils/date_funcs';
import { getFullUrl } from '../utils/url_utils';
import { default as renderSummary } from '../utils/summary';
import { getImgAsset } from '../utils/url_utils';

export default function ShowSchedule() {


  let [day, setDay] = useState(new Date().getDay()),
    schedule = useApiRequest([], 'schedule');

  function active(d) {
    if (d === daysOfWeek[day]) return 'active';
    return '';
  }

  function daysShows() {
    let temp = schedule[day], retval = [temp[0]];
    for (let show of temp.slice(1)) {
      let lastShow = retval[retval.length - 1];
      if (toLocalStr(parseDate(show.start)) !== toLocalStr(parseDate(lastShow.end))) {
        retval.push({
          image: getImgAsset('ktuh-logo.jpg'),
          start: lastShow.end,
          end: show.start,
          title: "NO SHOW",
          slug: "", id: -1, description: "", personas: null
        });
      }
      retval.push(show);
    }
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
            {daysShows().map((show) => show ? <ShowItem {...{ show }} /> : <tr colSpan={3}><td>NO SHOW</td></tr>)}
          </tbody>
        </table> : null}
      </div>
  ];
}
