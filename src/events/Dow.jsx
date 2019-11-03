import React from 'react';

export default function Dow({ children, ...rest }) {
  return <td {...rest} style={{
    verticalAlign: 'top',
    textAlign: 'center',
    fontWeight: 'bold',
    width: 'calc(100% / 7)',
    height: '25px'
  }}>{children}</td>;
}
