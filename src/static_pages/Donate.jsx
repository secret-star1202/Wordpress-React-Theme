import React, { useEffect, useState } from 'react';
import getApiRequest from '../utils/get_api_request';

export default function Donate() {
  let [state, setState] = useState({
    text: ''
  });

  useEffect(function () {
    if (!state.text) {
      getApiRequest('pages?slug=donate', ({ data: [{ content: { rendered: text } }] }) => {
        setState({ text });
      });
    }
  }, []);

  return <div id="uhf">
    <h2 className='general__header'>Donate</h2>
    <div dangerouslySetInnerHTML={{ __html: state.text }}></div>
    <div id='donate'></div>
  </div>;
}
