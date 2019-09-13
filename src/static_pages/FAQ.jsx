import React, { useState, useEffect } from 'react';
import QASection from './QASection.jsx';
import getApiRequest from '../utils/get_api_request';
import HeadStuff from '../reusables/HeadStuff.jsx';

export default function FAQ() {
  let [state, setState] = useState({
    faqData: []
  });
  useEffect(function () {
    getApiRequest('frequently_asked', ({
      data: [{
        data: {
          category_title: categoryTitle, qa_pair_category: qaPairCategory,
          qa_pair_answer: qaPairAnswer, qa_pair_question: qaPairQuestion
        }
      }]
    }) => {
      setState({
        faqData: categoryTitle.map(function (cat) {
          let indices = qaPairCategory.map((c, i) => (
            { category: c, i })).filter(({ category }) => category === cat);
          return {
            title: cat,
            pairs: indices.map(({ i }) => [qaPairQuestion[i], qaPairAnswer[i]])
          };
        })
      });
    });
  }, []);

  let { faqData } = state;

  return [<HeadStuff title='Frequently Asked Questions' />,
  <div className='faq__content'>
    {faqData.map(({ title, pairs }) => (
      <QASection {...{ title, pairs }} />
    ))}
  </div>];
}
