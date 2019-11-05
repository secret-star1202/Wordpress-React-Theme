import React from 'react';

export default function ({ children, ...rest }) {
  return <td {...rest} style={{
    verticalAlign: 'top',
    width: 'calc(100% / 7)',
    height: '25px',
    textAlign: 'center',
    fontWeight: 'bold',
  }}>{children}</td>;
}
