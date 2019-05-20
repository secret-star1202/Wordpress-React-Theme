import React, { Component } from 'react';
import HomeContentNews from './HomeContentNews.jsx';
import HomeContentReviews from './HomeContentReviews.jsx';
import HomeSidebar from './HomeSidebar.jsx';
import axios from 'axios';

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
      axios.get(`${this.props.siteUrl}/wp-json/wp/v2/posts?per_page=4'`),
      axios.get(`${this.props.siteUrl}/wp-json/wp/v2/review?per_page=6'`)
    ]).then(axios.spread((gotPosts, gotReviews) => {
        self.setState({
          posts: JSON.parse(gotPosts.data),
          reviews: JSON.parse(gotReviews.data)
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
        </div>
        <HomeSidebar />
      </div>
    );
  }
}
