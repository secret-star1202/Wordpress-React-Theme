import React from 'react';

export default function MNLItem({ url: src }) {
  return <div className="grid__item__mnl"><a><iframe width="100%" height="300"
    frameBorder="0" {...{ src }} allowFullScreen="" allow=
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
    </iframe>
  </a></div>;
}
