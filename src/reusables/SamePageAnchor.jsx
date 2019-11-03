import React from 'react';
import { default as siteInfo } from '../utils/config';
import { useGeneralContext } from '../hooks';

function SamePageAnchor({
  children, href, target, className, id, style
}) {
  let { generalState, setGeneralState } = useGeneralContext();

  function onClick(event) {
    let { siteUrl } = siteInfo;

    if (href.startsWith(siteUrl)) {
      event.preventDefault();
      let newState = Object.assign({}, generalState);
      newState.history.push(href.replace(siteUrl, ''));
      setGeneralState(newState);
    }
  }

  return <a {...{
    href, target, className, id, style, onClick
  }}>{children}</a>;
}

export default SamePageAnchor;
