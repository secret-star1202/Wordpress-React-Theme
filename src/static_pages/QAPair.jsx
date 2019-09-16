import React, { useState } from 'react';
import ContentBox from '../reusables/ContentBox.jsx';

export default function QAPair({ question, answer }) {
  let [state, setState] = useState({
    expanded: false
  });

  function handleClick() {
    setState({ expanded: !state.expanded });
  }

  function isExpanded() {
    return (state.expanded) ? ' expanded' : '';
  }

  let { expanded } = state;

  return <div className='faq__section-qna-pair'>
    <span className='toggle' onClick={handleClick}>{expanded ? '-' : '+' }
    </span>
    <div className='faq__section-qna-content'>
      <p onClick={handleClick} className='faq__question'>
        <span>{question}</span>
      </p>
      <ContentBox isP={true} className={`faq__answer${isExpanded()}`} content={answer} />
    </div>
  </div>;
}
