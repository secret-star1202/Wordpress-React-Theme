import React from 'react';
import useApiRequest from '../hooks/useApiRequest';
import ContentBox from '../reusables/ContentBox.jsx';
import HeadStuff from '../reusables/HeadStuff.jsx';

export default function Donate() {
  let state = useApiRequest({
    text: ''
  }, 'pages?slug=donate', ([{ content: { rendered: text } }], fxn) => {
    fxn({ text });
  });

  return [<HeadStuff title="Donate" />, <ContentBox content={state.text} />,
    <div id='donate'></div>];
}
