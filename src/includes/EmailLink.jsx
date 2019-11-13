import React from 'react';
import TitledLink from './TitledLink';

export default function ({ to }) {
  return <TitledLink href={`mailto:${to}`} text={to} />;
}
