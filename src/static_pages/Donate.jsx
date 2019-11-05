import React from 'react';
import { useApiRequest } from '../hooks';
import { ContentBox, HeadStuff } from '../reusables';

export default function Donate() {
  let content = useApiRequest('', 'pages?slug=donate',
    ([{ content: { rendered: text } }], fxn) => {
      fxn(text);
    });

  return [<HeadStuff title="Donate" />, <ContentBox {...{ content }} />, <div id='donate' />];
}
