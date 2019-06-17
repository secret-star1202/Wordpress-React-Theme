import React, { useState, useEffect } from 'react';
import { string, array } from 'prop-types';
import axios from 'axios';
import { Metamorph } from 'react-metamorph';
import { default as siteInfo } from '../utils/config';

function QAPair({ question, answer }) {
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
        <p className={`faq__answer ${isExpanded()}`()} dangerouslySetInnerHTML={
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

function QASection({ title, pairs }) {
  return (
    <div className='faq__section'>
      <div className='faq__section-header'>
        <h4>{title}</h4>
      </div>
      <div className='faq__section-qna'>
        {pairs.map(([question, answer]) => (
          <QAPair {...{ question, answer }} />
        ))}
      </div>
    </div>
  );
}


QASection.propTypes = {
  title: string,
  pairs: array
};

export default function FAQ() {
  let [state, setState] = useState({
    faq_data: []
  });
  useEffect(function () {
    axios.get(
      `${siteInfo.siteUrl}/wp-json/wp/v2/frequently_asked`
    ).then((res) => {
      setState({
        faq_data: res.data[0].data.category_title.map(function (cat) {
          let indices = res.data[0].data.qa_pair_category.map((c, i) => (
            { category: c, i })).filter(c => c.category === cat);
          return {
            title: cat,
            pairs: indices.map(p => [res.data[0].data.qa_pair_question[p.i],
              res.data[0].data.qa_pair_answer[p.i]])
          };
        })
      });
    });
  });

  return [
    <Metamorph title=
      'Frequently Asked Questions - KTUH FM Honolulu | Radio for the People'
      description="KTUH FAQ" image='https://ktuh.org/img/ktuh-logo.jpg' />,
    <h2 className='general__header'>Frequently Asked Questions</h2>,
    <div className='faq__content' key='faq-content'>
      {state.faq_data.map(({ title, pairs }) => (
        <QASection {...{ title, pairs }} />
      ))}
    </div>
  ];
}
