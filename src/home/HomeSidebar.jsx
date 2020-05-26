import React from 'react';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { default as parseDate, toLocalStr } from '../utils/date_funcs';
import { getFullUrl } from '../utils';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';

export default function () {
  // eslint-disable-next-line no-unused-vars
  let events = useApiRequest([], 'g_cal', ({ items }, fxn) => {
    if (items && items.length) {
      items.sort(function ({ start: { dateTime: a } }, { start: { dateTime: b } }) {
        let aTime = +new Date(a), bTime = +new Date(b);
        return aTime < bTime ? -1 : aTime > bTime ? 1 : 0;
      });
      let evts = items.filter((
        { start: { dateTime } }
      ) => +new Date(dateTime) > +new Date()).slice(0, 6);
      fxn(evts[0]);
    }
  });

  let nextOnAir = useApiRequest(null, 'next_on_air');

  if (!nextOnAir) return null;

  let {
      title, start, end, id
    } = nextOnAir, { summary, location } = events,
    startStr = toLocalStr(parseDate(start)),
    endStr = toLocalStr(parseDate(end));

  return <div className='home__sidebar'>
      <div className='home__next-show'>
        <div className='home__next-show-deets'>
          <p className="home__next-on-air">Next On Air</p>
          <p className='home__next-show-name'>
            <SamePageAnchor href={getFullUrl(`shows/${id}`)}>{title}</SamePageAnchor>
          </p>
          <p className='home__next-show-time'>
            {`${startStr} - ${endStr}`}
          </p>
        </div>
      </div>
      <div className='home__next-show'>
        <div className='home__next-show-deets'>
          <p className="home__next-on-air">Next Community Event</p>
          <p className='home__next-show-name'>
            <SamePageAnchor href={getFullUrl('events')}>{summary}</SamePageAnchor>
          </p>
          <p className='home__next-show-time'>
            {location}
          </p>
        </div>
      </div>
    </div>;
}
