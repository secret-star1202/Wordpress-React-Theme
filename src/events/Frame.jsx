import React from 'react';

export default function Frame({ children, ...rest }) {
  return <div {...rest} style={{
    width: '100%',
    height: '350px'
  }}>{children}</div>;
}
