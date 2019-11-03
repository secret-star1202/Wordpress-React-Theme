import React from 'react';

export default function Day({ children, ...rest }) {
  return <td {...rest} style={{
    verticalAlign: 'top',
    width: 'calc(100% / 7)',
    padding: '10px',
    height: '60px',
    border: 'thin black solid'
  }}>{children}</td>;
}
