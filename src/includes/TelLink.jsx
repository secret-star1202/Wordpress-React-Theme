import React from 'react';
import TitledLink from './TitledLink';

export default function ({ num, label }) {
  return <TitledLink href={`tel:${num}`} text={label} />;
}
