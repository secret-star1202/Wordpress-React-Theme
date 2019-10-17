import React from 'react';
import IThing from '../reusables/IThing.jsx';
import HeadStuff from '../reusables/HeadStuff.jsx';

export default function Schedule() {
  return [<HeadStuff title="Show Schedule" />,
    <IThing src="https://spinitron.com/KTUH/calendar?layout=1" height="1000" scrolling="auto" />,
    <div className="wp-block-button aligncenter is-style-squared">
      <a className="wp-block-button__link" href="https://manoa.hawaii.edu/ktuh/program-guides/">
        <font size="32">Old Program Guides</font>
      </a>
    </div>
  ];
}
