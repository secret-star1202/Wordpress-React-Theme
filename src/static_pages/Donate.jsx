import React from 'react';
import { useApiRequest } from '../hooks';
import { ContentBox, HeadStuff } from '../reusables';
import { queryToUrl } from '../utils/url_utils';

export default function Donate() {
  let content = useApiRequest('', `pages?${queryToUrl({ slug: 'donate' })}`,
    ([{ content: { rendered: text } }], fxn) => {
      fxn(text);
    });

  return [<HeadStuff title="Donate" />, <ContentBox {...{ content }} />, <div id='donate' />];
}
