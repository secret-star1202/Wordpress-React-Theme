import React from 'react';
import useApiRequest from '../hooks/useApiRequest';
import HeadStuff from '../reusables/HeadStuff.jsx';

function TimelineNode({ title, body }) {
  return <div className='timeline__node'>
    <div className='timeline__node-title'>{title}</div>
    <div className='timeline__node-body'>{body}</div>
  </div>;
}

export default function Timeline() {
  let { timelineData } = useApiRequest({
    timelineData: []
  }, 'timeline', ([{
    nodes: {
      nodes_date_string: nodesDateString, nodes_body: nodesBody
    }
  }], fxn) => {
    fxn({
      timelineData: nodesDateString.map((str, i) => ([str, nodesBody[i]]))
    });
  });

  return [<HeadStuff title="KTUH Timeline" />, <div className='timeline'>
    <div className='timeline__content'>
      {timelineData.map(([title, body]) => <TimelineNode {...{ title, body }} />)}
    </div>
  </div>];
}
