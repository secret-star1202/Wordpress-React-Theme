import React, { Component } from 'react';
import { Metamorph } from 'react-metamorph';
import { Redirect } from 'react-router-dom';
import axios from "axios";
import {default as siteInfo} from "../utils/config";
import renderSummary from '../utils/summary';

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: undefined
    };
  }

  componentWillMount() {
    let self = this;
    axios.get(
      `${siteInfo.siteUrl}/wp-json/wp/v2/posts?_embed&slug=${
        this.props.match.params.slug.replace(/\/$/, '')}`).then(
      res => {
        self.setState({ post: res.data.length > 0 ? res.data[0] : null });
      }
    );
  }

  render() {
    if (this.state.post) {
      let featuredImage = this.state.post._embedded && this.state.post._embedded['wp:featuredmedia'] &&
        this.state.post._embedded['wp:featuredmedia']['0'] &&
        this.state.post._embedded['wp:featuredmedia']['0'].source_url || undefined;

    return [
      <Metamorph title={this.status.post.title +
        ' - KTUH FM Honolulu | Radio for the People'}
      description={renderSummary(this.state.post.content.rendered, 50)}
      image={featuredImage || 'https://ktuh.org/img/ktuh-logo.png'} />,
      <h1 key="header-title" className='general__header'>
        {this.state.post.title.rendered}</h1>,
      <div key="radioblog-back-link" className='show__link'>
        <a href='/radioblog' className='back-to'>← Back to Radioblog</a>
      </div>,
      <div className='news-item' key="name-submitted">
        <p className='news-item__author'>
            <b>Posted by KTUH FM</b>
          <br />
          {new Date(this.state.post.date).toString()}
        </p>
        <img className='news-item__photo'
          src={featuredImage|| 'https://ktuh.org/img/ktuh-logo.png'} />
        <div className='news-item__body'
          dangerouslySetInnerHTML={{ __html: this.state.post.content.rendered }} />
      </div>
    ];
    }
    else if (this.state.post === null) {
      return <Redirect to='/not-found' />;
    }
    else if (this.state.post === undefined) {
      return null;
    }
  }
}

export default NewsPage;
