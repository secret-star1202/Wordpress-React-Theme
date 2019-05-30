import React, { Component } from 'react';
import HomeContentNews from './HomeContentNews.jsx';
import HomeContentReviews from './HomeContentReviews.jsx';
import HomeContentPodcasts from './HomeContentPodcasts.jsx';
import HomeSidebar from './HomeSidebar.jsx';
import axios from 'axios';
import { default as siteInfo } from '../utils/config';

export default class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        posts: [],
        reviews: []
    };
  }

  componentWillMount() {
    let self = this;
    axios.all([
      axios.get(`${siteInfo.siteUrl}/wp-json/wp/v2/posts?_embed`),
      axios.get(`${siteInfo.siteUrl}/wp-json/wp/v2/review?_embed`)
    ]).then(axios.spread((gotPosts, gotReviews) => {
        self.setState({
          posts: gotPosts.data,
          reviews: gotReviews.data
        });
      }
    ));
  }

    render() {
    return (
      <div className='content'>
        <div className='home__main'>
          <HomeContentNews posts={this.state.posts} />
          <HomeContentReviews reviews={this.state.reviews} />
          <HomeContentPodcasts podcast={this.state.podcast} />
        </div>
        <HomeSidebar />
      </div>
    );
  }
}
