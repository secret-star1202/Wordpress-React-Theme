import React from 'react';

export default function HoverLink({ children, title, ...rest }) {
  let style = {};

  if (window.innerWidth <= 800) {
    style.fontSize = '.625em';
  }

  return <a {...rest} title={title}>{children}</a>;
}
