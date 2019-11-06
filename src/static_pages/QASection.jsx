import React from 'react';
import { default as QAPair } from './QAPair';

export default function ({ title, pairs }) {
  return <div className='faq__section'>
    <div className='faq__section-header'><h4>{title}</h4></div>
    <div className='faq__section-qna'>
      {pairs.map(([question, content]) => <QAPair {...{ question, content }} />)}
    </div>
  </div>;
}
