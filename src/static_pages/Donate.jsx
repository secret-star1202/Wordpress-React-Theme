import React, { useEffect, useState } from 'react';
import { get as axget } from 'axios';
import { default as siteInfo } from '../utils/config';

export default function Donate() {
  let [state, setState] = useState({
    text: []
  });

  useEffect(function () {
    axget(
      `${siteInfo.siteUrl}/wp-json/wp/v2/pages?slug=donate`
    ).then(({ data: [item] }) => {
      setState({
        text: item.content.rendered
      });
    });
  }, []);

  useEffect(function () {
    if (!document.querySelector('#uhf iframe')) {
      $('#uhf').append($('iframe'));
    }
  });

  return <div id="uhf">
    <script id="uhf-donations-widget" dangerouslySetInnerHTML={{
      __html:
      "window.UHF = { cannedAmounts: null, fundId: 12063604, theme: 'neutral' };"
    }}>
    </script>
    <script defer src="https://giving.uhfoundation.org/widget-v2.js"></script>
  <h2 className='general__header'>Donate</h2>
  <div dangerouslySetInnerHTML={{ __html: state.text }}></div>
  </div>;
}
