import React from 'react';
import HomeContentNews from './HomeContentNews.jsx';
import HomeContentReviews from './HomeContentReviews.jsx';
import HomeContentPodcasts from './HomeContentPodcasts.jsx';
import HomeSidebar from './HomeSidebar.jsx';

export default function HomeContent() {
  return <div className='content'><div className='home__main'>
      <HomeContentNews />
      <HomeContentReviews />
      <HomeContentPodcasts />
    </div>
    <HomeSidebar />
  </div>;
}
