import React from 'react';
import MetaThing from './MetaThing.jsx';

export default function HeadStuff({
  title, description, headerText, image = 'https://ktuh.org/img/ktuh-logo.jpg'
}) {
  return [<MetaThing {...{ image, title }} description={description || title} />,
    <h2 className='general__header'>{headerText}</h2>];
}
