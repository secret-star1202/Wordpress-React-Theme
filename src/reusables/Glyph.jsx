import React from 'react';

export default function ({ symbol, type = 'glyphicon' }) {
  return <span className={`${type} ${type}-${symbol}`} />;
}
