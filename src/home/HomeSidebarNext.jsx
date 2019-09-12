import React from 'react';

function HomeSidebarNext({ nextOnAir: { title, start, end } }) {
  let startStr = new Date(start).toLocaleTimeString(),
    endStr = new Date(end).toLocaleTimeString();

  return <div className='home__next-show'>
    <div className='home__next-show-deets'>
      <p className="home__next-on-air">Next On Air</p>
      <p className='home__next-show-name'>{title}</p>
      <p className='home__next-show-time'>
        {`${startStr} - ${endStr}`}
      </p>
    </div>
  </div>;
}

export default HomeSidebarNext;
