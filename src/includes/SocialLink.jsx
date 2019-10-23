import React from 'react';

export default function SocialLink({ src, href }) {
  return <a {...{ href }} target="_blank" rel="noopener noreferrer">
    <img {...{ src }} />
  </a>;
}
