import React from 'react';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { default as HeadStuff } from '../reusables/HeadStuff';
import { default as TimelineNode } from './TimelineNode';

export default function Timeline() {
  let timelineData = useApiRequest([], 'timeline', ([{
    nodes: {
      nodes_date_string: nodesDateString, nodes_body: nodesBody
    }
  }], fxn) => {
    fxn(nodesDateString.map((str, i) => ([str, nodesBody[i]])));
  });

  return [<HeadStuff title="KTUH Timeline" />, <div className='timeline'>
    <div className='timeline__content'>
      {timelineData.map(([title, body]) => <TimelineNode {...{ title, body }} />)}
    </div>
  </div>];
}
