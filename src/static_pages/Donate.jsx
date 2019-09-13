import React, { useEffect, useState } from 'react';
import getApiRequest from '../utils/get_api_request';
import ContentBox from '../reusables/ContentBox.jsx';
import HeadStuff from '../reusables/HeadStuff.jsx';

export default function Donate() {
  let [state, setState] = useState({
    text: ''
  });

  useEffect(function () {
    if (state.text === '') {
      getApiRequest('pages?slug=donate', ({ data: [{ content: { rendered: text } }] }) => {
        setState({ text });
      });
    }
  }, []);

  return [
    <HeadStuff title="Donate" />,
    <ContentBox content={state.text} />,
    <div id='donate'></div>
  ];
}
