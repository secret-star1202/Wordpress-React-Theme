import React from 'react';
import PropTypes from 'prop-types';
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
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  target: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  history: PropTypes.object
};
