import React from 'react';
import IThing from '../reusables/IThing.jsx';

export default function MNLItem({ url: src }) {
  return <div className="grid__item__mnl"><a><IThing height="300" {...{ src }}
    allowFullScreen="" allow=
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
  </a></div>;
}
