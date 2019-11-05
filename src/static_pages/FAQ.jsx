import React from 'react';
import { default as QASection } from './QASection';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { HeadStuff, ContentBox } from '../reusables';

export default function () {
  let faqData = useApiRequest([], 'frequently_asked', ([{
    data: {
      category_title: categoryTitle, qa_pair_category: qaPairCategory,
      qa_pair_answer: qaPairAnswer, qa_pair_question: qaPairQuestion
    }
  }], fxn) => {
    fxn(categoryTitle.map(function (title) {
      let indices = qaPairCategory.map((c, i) => (
        { category: c, i })).filter(({ category }) => category === title);
      return {
        title,
        pairs: indices.map(({ i }) => [qaPairQuestion[i], qaPairAnswer[i]])
      };
    }));
  });

  return [<HeadStuff title='Frequently Asked Questions' />,
  <ContentBox className='faq__content'>
    {faqData.map(({ title, pairs }) => <QASection {...{ title, pairs }} />)}
  </ContentBox>];
}
