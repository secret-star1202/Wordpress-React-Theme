import React from 'react';
import { HeadStuff } from '../reusables';
import EmailLink from '../includes/EmailLink';

export default function SubmitPodcast() {
  return [<HeadStuff title="Submit Podcast" headerText="Submit a Podcast" />,
    <div className="submit-podcast__page">
      <h5>Do you want to hear your podcast on KTUH?</h5>
      Please submit your sample to <EmailLink to="podcasts@ktuh.org" />
    </div>
  ];
}
