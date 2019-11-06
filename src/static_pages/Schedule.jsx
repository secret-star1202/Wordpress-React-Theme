import React from 'react';
import { default as IThing } from '../reusables/IThing';
import { default as HeadStuff } from '../reusables/HeadStuff';

export default function () {
  return [<HeadStuff title="Show Schedule" />,
    <IThing src="https://spinitron.com/KTUH/calendar?layout=1" height="1000" scrolling="auto" />,
    <div className="wp-block-button aligncenter is-style-squared">
      <a className="wp-block-button__link" href="https://manoa.hawaii.edu/ktuh/program-guides/">
        <font size="32">Old Program Guides</font>
      </a>
    </div>
  ];
}
