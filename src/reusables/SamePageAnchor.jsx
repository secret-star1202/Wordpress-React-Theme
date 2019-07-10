import React from 'react';
import {
  string, oneOfType, func, object, array
} from 'prop-types';
import { default as siteInfo } from '../utils/config';

function SamePageAnchor({
  children, href, target, className, id, style, history
}) {
  function handleClick(event) {
    event.preventDefault();
    history.push(href.replace(siteInfo.siteUrl, ''));
  }

  return <a {...{
    href, target, className, id, style
  }} onClick={handleClick}>{children}</a>;
}

export default SamePageAnchor;

SamePageAnchor.propTypes = {
  href: oneOfType([string, func]),
  target: oneOfType([string, func]),
  className: oneOfType([string, func]),
  id: oneOfType([string, func]),
  style: oneOfType([object, func]),
  children: oneOfType([array, func]),
  history: object
};
