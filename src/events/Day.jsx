import React from 'react';

export default function ({ children, ...rest }) {
  return <td {...rest} style={{
    verticalAlign: 'top',
    height: '60px',
    padding: '10px',
    border: 'thin black solid'
  }}>{children}</td>;
}
