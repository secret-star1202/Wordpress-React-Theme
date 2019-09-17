import React from 'react';
import { getImgAsset } from '../utils/url_utils';

export default function SocialLink({ imgSrc, url }) {
  return <a href={url} target="_blank" rel="noopener noreferrer">
    <img src={getImgAsset(imgSrc)} />
  </a>;
}
