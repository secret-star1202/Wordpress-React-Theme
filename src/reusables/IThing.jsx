import React from 'react';

export default function IThing({
  height, allow = 'autoplay', src, scrolling = 'no', ...rest
}) {
  return <iframe width="100%" frameBorder="no" {...{
    scrolling, height, allow, src, ...rest
  }} />;
}
