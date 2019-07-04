import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeContentNews from './HomeContentNews.jsx';
import HomeContentReviews from './HomeContentReviews.jsx';
import HomeContentPodcasts from './HomeContentPodcasts.jsx';
import HomeSidebar from './HomeSidebar.jsx';
import { default as siteInfo } from '../utils/config';

export default function HomeContent() {
  let [state, setState] = useState({
    posts: [],
    reviews: [],
    podcasts: [],
    events: [],
  });

  useEffect(function () {
    axios.all([
      axios.get(`${siteInfo.siteUrl}/wp-json/wp/v2/posts?_embed&per_page=6`),
      axios.get(`${siteInfo.siteUrl}/wp-json/wp/v2/review?_embed&per_page=6`),
      axios.get(`${siteInfo.siteUrl}/wp-json/wp/v2/podcast?_embed&per_page=6`),
      axios.get(`${siteInfo.siteUrl}/wp-json/wp/v2/event?_embed&per_page=6`)
    ]).then(axios.spread((gotPosts, gotReviews, gotPodcasts, gotEvents) => {
      setState({
        posts: gotPosts.data,
        reviews: gotReviews.data,
        podcasts: gotPodcasts.data,
        events: gotEvents.data
      });
    }));
  }, []);

  return (
    <div className='content'>
      <div className='home__main'>
        <HomeContentNews posts={state.posts} />
        <HomeContentReviews reviews={state.reviews} />
        <HomeContentPodcasts podcasts={state.podcasts} />
      </div>
      <HomeSidebar />
    </div>
  );
}
