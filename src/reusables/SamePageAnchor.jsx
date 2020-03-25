import React, { useContext } from 'react';
import { default as siteInfo } from '../utils/config';
import { default as TheRouterContext } from '../contexts/TheRouterContext';

export default function SamePageAnchor({
  children, href, ...rest
}) {
  let { history } = useContext(TheRouterContext);

  function onClick(event) {
    let { siteUrl } = siteInfo;

    if (href.startsWith(siteUrl)) {
      event.preventDefault();
      history.push(href.replace(siteUrl, ''));
    }
  }

  return <a href={href} onClick={onClick} {...rest}>{children}</a>;
}
