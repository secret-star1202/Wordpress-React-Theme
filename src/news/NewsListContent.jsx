import React, { Component } from 'react';
import NewsItem from './NewsItem.jsx';
import EverAfter from 'react-everafter';
import axios from "axios";
import { default as siteInfo } from "../utils/config";

class NewsListContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    let self = this;
    axios.get(
      `${siteInfo.siteUrl}/wp-json/wp/v2/posts?_embed`).then(
      res => {
        self.setState({ posts: res.data.length > 0 ? res.data : [] });
      }
    );
  }

  render() {
    if (this.state.posts && this.state.posts.length > 0) {
      return (
        <div className='news-list__content'>
          <div className='news-list'>
            <EverAfter.Paginator wrapper={NewsItem} perPage={4}
              items={this.state.posts} truncate={true} />
          </div>
        </div>
      );
    }
    else return null;
  }
}

export default NewsListContent;
