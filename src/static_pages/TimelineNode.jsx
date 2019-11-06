import React from 'react';

export default function ({ title, body }) {
  return <div className='timeline__node'>
    <div className='timeline__node-title'>{title}</div>
    <div className='timeline__node-body'>{body}</div>
  </div>;
}
