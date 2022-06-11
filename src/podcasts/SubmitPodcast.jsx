import React from 'react';
import { HeadStuff } from '../reusables';
import EmailLink from '../includes/EmailLink';

export default function SubmitPodcast() {
  return [<HeadStuff title="Submit Podcast" headerText="Submit a Podcast" />,
    <div className="submit-podcast__page">
      <h3>Do you want to hear your podcast on KTUH?</h3>
      <p>Please submit a sample to <EmailLink to="pd@ktuh.org" /></p>
      <h5>And CC</h5>
      <p>
        <EmailLink to="apd@ktuh.org" style={{ margin: 0 }} />
        <EmailLink to="gm@ktuh.org" style={{ margin: 0 }} />
      </p>
    </div>
  ];
}
