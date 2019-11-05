import React from 'react';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { toLocalStr } from '../utils';

export default function () {
  let nextOnAir = useApiRequest(null, 'next_on_air', ({ items }, fxn) => {
    fxn(items[1]);
  });

  if (!nextOnAir) return null;

  let { title, start, end } = nextOnAir,
    startStr = toLocalStr(new Date(start)),
    endStr = toLocalStr(new Date(end));

  return <div className='home__sidebar'>
    <div className='home__next-show'>
      <div className='home__next-show-deets'>
        <p className="home__next-on-air">Next On Air</p>
        <p className='home__next-show-name'>{title}</p>
        <p className='home__next-show-time'>
          {`${startStr} - ${endStr}`}
        </p>
      </div>
    </div>
  </div>;
}
