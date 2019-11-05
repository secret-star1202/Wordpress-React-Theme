import React, { useState } from 'react';
import { default as ContentBox } from '../reusables/ContentBox';

export default function ({ question, content }) {
  let [expanded, setExpanded] = useState(false);

  function onClick() {
    setExpanded(!expanded);
  }

  function isExpanded() {
    return expanded ? ' expanded' : '';
  }

  return <div className='faq__section-qna-pair'>
    <span className='toggle' {...{ onClick }}>{expanded ? '-' : '+' }</span>
    <div className='faq__section-qna-content'>
      <p {...{ onClick }} className='faq__question'>
        <span>{question}</span>
      </p>
      <ContentBox isP className={`faq__answer${isExpanded()}`} {...{ content }} />
    </div>
  </div>;
}
