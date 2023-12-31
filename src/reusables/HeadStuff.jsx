import React from 'react';
import { default as MetaThing } from './MetaThing';
import { getImgAsset } from '../utils/url_utils';

export default function ({
  title, description, headerText, image = getImgAsset('ktuh-logo.jpg')
}) {
  return [
    <MetaThing {...{ image, title }} description={description || title} />,
    <div className='header__wrapper'><h2 className='general__header'>{headerText || title}</h2></div>
  ];
}
