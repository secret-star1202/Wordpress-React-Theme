import React from 'react';
import { default as IThing } from '../reusables/IThing';

export default function (props) {
  return <div className="grid__item__mnl"><a><IThing height="300" {...props} allowFullScreen="" allow=
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
  </a></div>;
}
