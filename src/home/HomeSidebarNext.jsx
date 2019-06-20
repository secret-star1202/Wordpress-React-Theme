import React from 'react';
import PropTypes from 'prop-types';
import { default as momentUtil } from 'moment';

function HomeSidebarNext({ nextOnAir: { title, start, end } }) {
  return (<div className='home__next-show'>
    <div className='home__next-show-deets'>
      <p className="home__next-on-air">Next On Air</p>
      <p className='home__next-show-name'>
        {title}
      </p>
      <p className='home__next-show-time'>
        {`${momentUtil(start).format('h:mm A')}-${momentUtil(end).format('h:mm A')}`}
      </p>
    </div>
  </div>);
}

HomeSidebarNext.propTypes = {
  nextOnAir: PropTypes.object
};

export default HomeSidebarNext;
