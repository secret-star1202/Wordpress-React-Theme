import React, { useEffect, useState } from 'react';
import { get as axget } from 'axios';
import { default as siteInfo } from '../utils/config';

export default function Donate() {
  let [state, setState] = useState({
    text: undefined
  });

  useEffect(function () {
    if (!state.text) {
      axget(
        `${siteInfo.siteUrl}/wp-json/wp/v2/pages?slug=donate`
      ).then(({ data: [item] }) => {
        setState({
          text: item.content.rendered
        });
      });
    }
  }, []);

  return <div id="uhf">
    <h2 className='general__header'>Donate</h2>
    <div dangerouslySetInnerHTML={{ __html: state.text }}></div>
    <div id='donate'></div>
  </div>;
}
