import React from 'react';

export default function ({ num, label }) {
  return <p><a href={`tel:${num}`}>{label}</a></p>;
}
