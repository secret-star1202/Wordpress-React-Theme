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
      `https://spinitron.com/api/shows?access-token=${siteInfo.spinAccessToken}`
    ).then(
      (response) => {
        setState({ nextOnAir: response.data.items[1] });
      }
    );
  }, []);

  return <div className='home__sidebar'>
      {state.nextOnAir ? <HomeSidebarNext nextOnAir={state.nextOnAir} /> : null}
    </div>;
}
