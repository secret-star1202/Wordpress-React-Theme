import React from 'react';
import useApiRequest from '../hooks/useApiRequest';

export default function HomeSidebar() {
  let state = useApiRequest({
    nextOnAir: null
  }, 'next_on_air', ({ items }, fxn) => {
    fxn({ nextOnAir: items[1] });
  });

  let { nextOnAir } = state;

  if (!nextOnAir) return null;

  let { title, start, end } = nextOnAir, startStr = new Date(start).toLocaleTimeString({ timeZone: 'Pacific/Honolulu' }),
    endStr = new Date(end).toLocaleTimeString({ timeZone: 'Pacific/Honolulu' });

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
