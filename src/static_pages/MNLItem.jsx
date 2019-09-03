import React from 'react';

export default function MNLItem({ url }) {
  return <div className="grid__item__mnl">
    <a><iframe width="100%" height="300" frameBorder="0" src={url} allow=
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen=""></iframe>
  </a></div>;
}
