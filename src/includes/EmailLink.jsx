import React from 'react';

export default function ({ to }) {
  return <p><a href={`mailto:${to}`}>{to}</a></p>;
}
