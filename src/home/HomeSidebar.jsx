import React, { useState, useEffect } from 'react';
import getApiRequest from '../utils/get_api_request';

export default function HomeSidebar() {
  let [state, setState] = useState({
    nextOnAir: null
  });

  useEffect(function () {
    getApiRequest('next_on_air', ({ data }) => {
      setState({ nextOnAir: data && data.items[1] });
    });
  }, []);

  let { nextOnAir } = state;

  if (!nextOnAir) return null;

  let { title, start, end } = nextOnAir, startStr = new Date(start).toLocaleTimeString(),
    endStr = new Date(end).toLocaleTimeString();

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
