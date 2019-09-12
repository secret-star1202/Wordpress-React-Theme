import React from 'react';
import { Metamorph } from 'react-metamorph';

export default function SubmitPodcast() {
  return [<Metamorph title="Submit Podcast - KTUH FM Honolulu | Radio for the People"
    description="Submit Podcast" image='https://ktuh.org/img/ktuh-logo.jpg'
  />,
  <h2 className='general__header'>Submit a Podcast</h2>,
    <h5 className="show__time">
      Do you want to hear your podcast on KTUH?</h5>,
    <div className="show-item__genres">
       Please submit your sample to <a href="mailto:podcasts@ktuh.org">
       podcasts@ktuh.org
      </a>
    </div>
  ];
}
