import React from 'react';

function HomeSidebarNext({ nextOnAir: { title, start, end } }) {
  return <div className='home__next-show'>
    <div className='home__next-show-deets'>
      <p className="home__next-on-air">Next On Air</p>
      <p className='home__next-show-name'>{title}</p>
      <p className='home__next-show-time'>
        {`${new Date(start).toLocaleTimeString()} - ${new Date(end).toLocaleTimeString()}`}
      </p>
    </div>
  </div>;
}

export default HomeSidebarNext;
