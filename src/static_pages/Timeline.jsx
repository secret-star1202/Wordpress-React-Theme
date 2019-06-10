import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Metamorph } from 'react-metamorph';
import { default as siteInfo } from '../utils/config';

class TimelineNode extends Component {
  static propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
  }

  render() {
    return (
      <div className='timeline__node'>
        <div className='timeline__node-title'>
          {this.props.title}
        </div>
        <div className='timeline__node-body'>
          {this.props.body}
        </div>
      </div>
    );
  }
}

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = { timeline_data: [] }
  }

  componentWillMount() {
    let self = this;
    axios.get(
      `${siteInfo.siteUrl}/wp-json/wp/v2/timeline`
    ).then(res => {
      self.setState({ timeline_data:
        res.data[0].nodes.nodes_date_string.map((str, i) => (
          [str, res.data[0].nodes.nodes_body[i]]
        ))
      });
    });
  }

  render() {
    return [
      <Metamorph title="Timeline - KTUH FM Honolulu | Radio for the People"
        description="KTUH Timeline" image='https://ktuh.org/img/ktuh-logo.jpg'
      />,
      <h2 className='general__header'>KTUH Timeline</h2>,
      <div className='timeline' key='timeline'>
        <div className='timeline__content'>
          {this.state.timeline_data.map((node) => (
            <TimelineNode title={node[0]} body={node[1]} />))}
        </div>
      </div>
    ];
  }
}
