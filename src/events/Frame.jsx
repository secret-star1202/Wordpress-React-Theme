import React from 'react';

export default function ({ children, ...rest }) {
  return <div {...rest} style={{
    height: '350px'
  }}>{children}</div>;
}
