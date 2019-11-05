import React from 'react';
import { default as HomeSidebar } from './HomeSidebar';
import { default as HomeContentSection } from './HomeContentSection';
import { default as HomeContentNewsItem } from './HomeContentNewsItem';
import { default as HomeContentReviewsItem } from './HomeContentReviewsItem';
import { default as HomeContentPodcastItem } from './HomeContentPodcastItem';

export default function () {
  return <div className='content'><div className='home__main'>
    <HomeContentSection outerDivClass='home__news' href='radioblog'
      apiUrl='posts' perPage={3} innerDivClass='home__news-content'
      headText='RADIOBLOG' moreText='NEWS' itemComp={HomeContentNewsItem} />
    <HomeContentSection outerDivClass='home__reviews' href='reviews'
      apiUrl='review' perPage={5} innerDivClass='home__reviews-content'
      headText='MUSIC REVIEWS' moreText='REVIEWS' itemComp={HomeContentReviewsItem} />
    <HomeContentSection outerDivClass='home__podcast' href='podcasts'
      apiUrl='podcast' perPage={3} innerDivClass='home__podcast-content'
      headText='MUSIC REVIEWS' moreText='REVIEWS' itemComp={HomeContentPodcastItem} /></div>
    <HomeSidebar /></div>;
}
