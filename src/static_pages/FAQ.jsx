import React from 'react';
import QASection from './QASection.jsx';
import useApiRequest from '../hooks/useApiRequest';
import { HeadStuff, ContentBox } from '../reusables';

export default function FAQ() {
  let state = useApiRequest({
    faqData: []
  }, 'frequently_asked', ([{
    data: {
      category_title: categoryTitle, qa_pair_category: qaPairCategory,
      qa_pair_answer: qaPairAnswer, qa_pair_question: qaPairQuestion
    }
  }], fxn) => {
    fxn({
      faqData: categoryTitle.map(function (title) {
        let indices = qaPairCategory.map((c, i) => (
          { category: c, i })).filter(({ category }) => category === title);
        return {
          title,
          pairs: indices.map(({ i }) => [qaPairQuestion[i], qaPairAnswer[i]])
        };
      })
    });
  });

  let { faqData } = state;

  return [<HeadStuff title='Frequently Asked Questions' />,
  <ContentBox className='faq__content'>
    {faqData.map(({ title, pairs }) => <QASection {...{ title, pairs }} />)}
  </ContentBox>];
}
