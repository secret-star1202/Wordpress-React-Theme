import React, { useEffect, useState } from 'react';
import { getApiRequest, getFullUrl } from '../utils/url_utils';

export default function Support() {
  let [state, setState] = useState({
    text: ''
  });

  useEffect(function () {
    getApiRequest('support_text', ({ data }) => {
      setState({ text: data });
    });
  });

  return state.text.length ? <div className='support'>
    <h1 className='support__heading'>College Radio Needs Your Support!</h1>
    <p className='support__about'>{state.text}</p>
    <a href={getFullUrl('donate')} className='color-button purple-button'>Donate Now</a>
  </div> : null;
}
