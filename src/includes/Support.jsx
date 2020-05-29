import React from 'react';
import { default as DonateButton } from './DonateButton';

export default function () {
  let text = document.querySelector('meta[name="support-text"]').content;

  return <div className='support'>
    <h1 className='support__heading'>College Radio Needs Your Support!</h1>
    <p className='support__about'>{text}</p>
    <DonateButton />
  </div>;
}
