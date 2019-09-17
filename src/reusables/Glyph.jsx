import React from 'react';

export default function Glyph({ symbol }) {
  return <span className={`glyphicon glyphicon-${symbol}`}></span>;
}
