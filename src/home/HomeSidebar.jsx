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
      evts.sort((a, b) => {
        return +new Date(a.start.dateTime) - +new Date(b.start.dateTime);
      });
      fxn(evts[0]);
    }
  });

  let nextOnAir = useApiRequest(null, 'next_on_air');

  if (!nextOnAir) return null;

  let {
      title, start, end, id
    } = nextOnAir,
    startStr = toLocalStr(parseDate(start)),
    endStr = toLocalStr(parseDate(end));
  
  let d = new Date();
  let emoji = '';
  if (d.getMonth() === 11 && d.getDate() > 9 && d.getDate() < 28) {
    emoji = '❄️';
  }
  if (d.getMonth() === 1 && d.getDate() > 10 && d.getDate() < 15) {
    emoji = '❤️';
  }

  return <div className='home__sidebar'>
    {emoji ? <div class="snowflakes" aria-hidden="true">
      <div class="snowflake">
        {emoji}
      </div>
      <div class="snowflake">
        {emoji}
      </div>
      <div class="snowflake">
        {emoji}
      </div>
      <div class="snowflake">
        {emoji}
      </div>
      <div class="snowflake">
        {emoji}
      </div>
      <div class="snowflake">
        {emoji}
      </div>
      <div class="snowflake">
        {emoji}
      </div>
      <div class="snowflake">
        {emoji}
      </div>
      <div class="snowflake">
        {emoji}
      </div>
      <div class="snowflake">
        {emoji}
      </div>
      <div class="snowflake">
        {emoji}
      </div>
      <div class="snowflake">
        {emoji}
      </div>
    </div> : null}
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
    {events ? <div className='home__next-show'>
      <a href={getFullUrl('events')}>
        <div className='home__next-show-deets'>
          <p className="home__next-on-air">Next Community Event</p>
          <p className='home__next-show-name'>
            <SamePageAnchor href={getFullUrl('events')}>{events.summary}</SamePageAnchor>
          </p>
          <p className='home__next-show-time'>
            {events.location}
          </p>
        </div>
      </a>
      </div> : null}
    </div>;
}
