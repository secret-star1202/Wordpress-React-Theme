import React, { useContext } from 'react';
import {
  string, oneOfType, func, object, array
} from 'prop-types';
import { default as siteInfo } from '../utils/config';
import GeneralContext from '../contexts/GeneralContext';

function SamePageAnchor({
  children, href, target, className, id, style
}) {
  let { generalState, setGeneralState } = useContext(GeneralContext);

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

SamePageAnchor.propTypes = {
  href: oneOfType([string, func]),
  target: oneOfType([string, func]),
  className: oneOfType([string, func]),
  id: oneOfType([string, func]),
  style: oneOfType([object, func]),
  children: oneOfType([array, func])
};
