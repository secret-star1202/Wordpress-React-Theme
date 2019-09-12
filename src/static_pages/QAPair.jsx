import React, { useState } from 'react';

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
      <p onClick={handleClick} className='faq__question'><span>{question}</span>
      </p>
      <p className={`faq__answer${isExpanded()}`} dangerouslySetInnerHTML={
        { __html: answer }
      } />
    </div>
  </div>;
}
