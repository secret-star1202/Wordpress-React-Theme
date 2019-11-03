import React from 'react';
import { HeadStuff } from '../reusables';
import { EmailLink } from '../includes/Footer.jsx';

export default function SubmitPodcast() {
  return [<HeadStuff title="Submit Podcast" headerText="Submit a Podcast" />,
    <h5 className="show__time">Do you want to hear your podcast on KTUH?</h5>,
    <div className="show-item__genres">
      Please submit your sample to <EmailLink to="podcasts@ktuh.org" />.;
    </div>
  ];
}
