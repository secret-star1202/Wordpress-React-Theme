import React from 'react';
import { getFullUrl } from '../utils/url_utils';
import useApiRequest from '../hooks/useApiRequest';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';

export default function Support() {
  let state = useApiRequest({
      text: ''
    }, 'support_text', (text, fxn) => {
      fxn({ text });
    }), { text } = state;

  return text.length ? <div className='support'>
    <h1 className='support__heading'>College Radio Needs Your Support!</h1>
    <p className='support__about'>{text}</p>
    <SamePageAnchor href={getFullUrl('donate')} className='color-button purple-button'>Donate Now</SamePageAnchor>
  </div> : null;
}
