import React, { useState, useEffect } from 'react';
import getApiRequest from '../utils/get_api_request';
import HeadStuff from '../reusables/HeadStuff.jsx';

function TimelineNode({ title, body }) {
  return <div className='timeline__node'>
    <div className='timeline__node-title'>{title}</div>
    <div className='timeline__node-body'>{body}</div>
  </div>;
}

export default function Timeline() {
  let [state, setState] = useState({
    timelineData: []
  });

  useEffect(function () {
    getApiRequest('timeline', ({ data: [item] }) => {
      setState({
        timelineData:
        item.nodes.nodes_date_string.map((str, i) => (
          [str, item.nodes.nodes_body[i]]
        ))
      });
    });
  }, []);

  let { timelineData } = state;

  return [<HeadStuff title="KTUH Timeline" />,
  <div className='timeline'>
    <div className='timeline__content'>
      {timelineData.map(([title, body]) => (
        <TimelineNode {...{ title, body }} />))}
    </div>
  </div>];
}
