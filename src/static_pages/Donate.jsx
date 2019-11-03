import React from 'react';
import { useApiRequest } from '../hooks';
import { ContentBox, HeadStuff } from '../reusables';

export default function Donate() {
  let state = useApiRequest({
    text: ''
  }, 'pages?slug=donate', ([{ content: { rendered: text } }], fxn) => {
    fxn({ text });
  });

  return [<HeadStuff title="Donate" />, <ContentBox content={state.text} />,
    <div id='donate'></div>];
}
