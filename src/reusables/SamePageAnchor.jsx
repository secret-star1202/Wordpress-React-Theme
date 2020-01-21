import React, { useContext } from 'react';
import { default as siteInfo } from '../utils/config';
import { default as TheRouterContext } from '../contexts/TheRouterContext';

function SamePageAnchor({
  children, href, target, className, id, style
}) {
  let { history } = useContext(TheRouterContext);

  function onClick(event) {
    let { siteUrl } = siteInfo;

    if (href.startsWith(siteUrl)) {
      event.preventDefault();
      history.push(href.replace(siteUrl, ''));
    }
  }

  return <a {...{
    href, target, className, id, style, onClick
  }}>{children}</a>;
}

export default SamePageAnchor;
