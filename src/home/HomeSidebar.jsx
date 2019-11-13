import React from 'react';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { default as parseDate, toLocalStr } from '../utils/date_funcs';
import { getFullUrl } from '../utils';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';

export default function () {
  let nextOnAir = useApiRequest(null, 'next_on_air');

  if (!nextOnAir) return null;

  let {
      title, start, end, id
    } = nextOnAir,
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
  </div>;
}
