import React, { useState } from 'react';
import ContentBox from '../reusables/ContentBox.jsx';

export default function QAPair({ question, content }) {
  let [state, setState] = useState({
    expanded: false
  });

  function onClick() {
    setState({ expanded: !state.expanded });
  }

  function isExpanded() {
    return (state.expanded) ? ' expanded' : '';
  }

  let { expanded } = state;

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
