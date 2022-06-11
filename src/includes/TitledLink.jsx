import React from 'react';

export default function ({ href, text, style }) {
  return <p style={style}><a {...{ href }}>{text}</a></p>;
}
