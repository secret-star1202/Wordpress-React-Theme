import React from 'react';
import TitledLink from './TitledLink';

export default function ({ to, style }) {
  return <TitledLink href={`mailto:${to}`} text={to} style={style}/>;
}
