import React from 'react';
import { default as siteInfo } from '../utils/config';
import useGeneralContext from '../hooks/useGeneralContext';

function SamePageAnchor({
  children, href, target, className, id, style
}) {
  let { generalState, setGeneralState } = useGeneralContext();

  function handleClick(event) {
    if (href.startsWith(siteInfo.siteUrl)) {
      event.preventDefault();
      let newState = Object.assign({}, generalState);
      newState.history.push(href.replace(siteInfo.siteUrl, ''));
      setGeneralState(newState);
    }
  }

  return <a {...{
    href, target, className, id, style
  }} onClick={handleClick}>{children}</a>;
}

export default SamePageAnchor;
