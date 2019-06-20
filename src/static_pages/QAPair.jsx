import React, { useState } from 'react';
import { string } from 'prop-types';

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

  return (
    <div className='faq__section-qna-pair'>
      <span className='toggle'
            onClick={handleClick}>
        {state.expanded ? '-' : '+' }
      </span>
      <div className='faq__section-qna-content'>
        <p onClick={handleClick} className='faq__question'>
          <span>{question}</span>
        </p>
        <p className={`faq__answer ${isExpanded()}`} dangerouslySetInnerHTML={
          { __html: answer }
        } />
      </div>
    </div>
  );
}

QAPair.propTypes = {
  question: string,
  answer: string
};