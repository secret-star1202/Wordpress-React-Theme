import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Metamorph } from 'react-metamorph';
import QASection from './QASection.jsx';
import { default as siteInfo } from '../utils/config';

export default function FAQ() {
  let [state, setState] = useState({
    faq_data: []
  });
  useEffect(function () {
    axios.get(
      `${siteInfo.siteUrl}/wp-json/wp/v2/frequently_asked`
    ).then(({ data: [item] }) => {
      setState({
        faq_data: item.data.category_title.map(function (cat) {
          let indices = item.data.qa_pair_category.map((c, i) => (
            { category: c, i })).filter(c => c.category === cat);
          return {
            title: cat,
            pairs: indices.map(p => [item.data.qa_pair_question[p.i],
              item.data.qa_pair_answer[p.i]])
          };
        })
      });
    });
  }, []);

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
