import React from 'react';

export default function ({ href, text }) {
  return <p><a {...{ href }}>{text}</a></p>;
}
