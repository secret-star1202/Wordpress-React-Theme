import React, { useContext } from 'react';
import { default as TheRouterContext } from '../contexts/TheRouterContext';

export default function SamePageAnchor({
  children, href, ...rest
}) {
  let { history } = useContext(TheRouterContext);

  function onClick(event) {
    let siteUrl = document.querySelector('link[rel="basename"]').href;

    if (href.startsWith(siteUrl)) {
      event.preventDefault();
      history.push(href.replace(siteUrl, ''));
    } else if (href.startsWith('/')) {
      event.preventDefault();
      history.push(href);
    }
  }

  return <a href={href} onClick={onClick} {...rest}>{children}</a>;
}
