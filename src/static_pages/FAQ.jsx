import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { default as siteInfo } from '../utils/config';
import { Metamorph } from 'react-metamorph';

class QAPair extends Component {
  static propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };

    this.expanded = this.expanded.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.expanded !== this.state.expanded;
  }

  handleClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  expanded() {
    if (this.state.expanded) return ' expanded';
    return '';
  }

  render() {
    var expanded = this.expanded;
    return (
      <div className='faq__section-qna-pair'>
        <span className='toggle'
              onClick={this.handleClick.bind(this)}>
          {(() => {
            if (this.state.expanded) return '-'; else return '+'; })()}
        </span>
        <div className='faq__section-qna-content'>
          <p onClick={this.handleClick.bind(this)} className='faq__question'>
            <span>{this.props.question}</span>
          </p>
          <p className={'faq__answer' + expanded()} dangerouslySetInnerHTML={
            { __html: this.props.answer }
          } />
        </div>
      </div>
    );
  }
}

class QASection extends Component {
  static propTypes = {
    title: PropTypes.string,
    pairs: PropTypes.array
  }

  render() {
    return (
      <div className='faq__section'>
        <div className='faq__section-header'>
          <h4>{this.props.title}</h4>
        </div>
        <div className='faq__section-qna'>
          {this.props.pairs.map((pair) =>
            <QAPair question={pair[0]} answer={pair[1]} />
          )}
        </div>
      </div>
    )
  }
}

export default class FAQ extends Component {
  constructor(props) {
    super(props);

    this.state = {
      faq_data: []
    }
  }

  componentWillMount() {
    let self = this;
    axios.get(
      `${siteInfo.siteUrl}/wp-json/wp/v2/frequently_asked`
    ).then((res) => {
      self.setState({
        faq_data: res.data[0].data.category_title.map(function(cat) {
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
  }

  render() {
    console.log(this.state.faq_data);
    return [
      <Metamorph title=
        'Frequently Asked Questions - KTUH FM Honolulu | Radio for the People'
        description="KTUH FAQ" image='https://ktuh.org/img/ktuh-logo.jpg' />,
      <h2 className='general__header'>Frequently Asked Questions</h2>,
      <div className='faq__content' key='faq-content'>
        {this.state.faq_data.map((node) => (
          <QASection title={node.title} pairs={node.pairs} />
        ))}
      </div>
    ];
  }
}
