import React from 'react';
import QAPair from './QAPair.jsx';

export default function QASection({ title, pairs }) {
  return <div className='faq__section'>
    <div className='faq__section-header'><h4>{title}</h4></div>
    <div className='faq__section-qna'>
      {pairs.map(([question, answer]) => <QAPair {...{ question, answer }} />)}
    </div>
  </div>;
}
