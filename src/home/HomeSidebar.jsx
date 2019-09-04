import React, { useState, useEffect } from 'react';
import { get as axget } from 'axios';
import HomeSidebarNext from './HomeSidebarNext.jsx';
import { default as siteInfo } from '../utils/config';

export default function HomeSidebar() {
  let [state, setState] = useState({
    nextOnAir: null
  });

  useEffect(function () {
    axget(
      `${siteInfo.siteUrl}/wp-json/wp/v2/next_on_air`
    ).then(
      ({ data }) => {
        setState({ nextOnAir: data && data.items[1] });
      }
    );
  }, []);

  let { nextOnAir } = state;

  return nextOnAir && <div className='home__sidebar'>
    {nextOnAir ? <HomeSidebarNext {...{ nextOnAir }} /> : null}
  </div> || null;
}
