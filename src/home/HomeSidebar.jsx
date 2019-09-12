import React, { useState, useEffect } from 'react';
import HomeSidebarNext from './HomeSidebarNext.jsx';
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

  return nextOnAir && <div className='home__sidebar'>
    <HomeSidebarNext {...{ nextOnAir }} />
  </div> || null;
}
