import React from 'react';
import { default as HomeSidebar } from './HomeSidebar';
import { default as HomeContentSection } from './HomeContentSection';
import { default as HomeContentNewsItem } from './HomeContentNewsItem';
import { default as HomeContentReviewsItem } from './HomeContentReviewsItem';
import { default as HomeContentPodcastItem } from './HomeContentPodcastItem';

let mobile = false;

if ((window.innerWidth <= 800) && (window.innerHeight <= 800)) {
  mobile = true;
}

export default function () {
  return <div className='content'>
    {mobile ? <HomeSidebar /> : null}
    <div className='home__main'>
    <HomeContentSection outerDivClass='home__news' href='radioblog'
      apiUrl='posts' perPage={3} innerDivClass='home__news-content'
      headText='RADIOBLOG' moreText='NEWS' itemComp={HomeContentNewsItem} />
    <HomeContentSection outerDivClass='home__reviews' href='reviews'
      apiUrl='review' perPage={5} innerDivClass='home__reviews-content'
      headText='MUSIC REVIEWS' moreText='REVIEWS' itemComp={HomeContentReviewsItem} />
    <HomeContentSection outerDivClass='home__podcast' href='podcasts'
      apiUrl='podcast' perPage={1} innerDivClass='home__podcast-content'
      headText='PODCASTS' moreText='PODCASTS' itemComp={HomeContentPodcastItem} /></div>
    {!mobile ? <HomeSidebar /> : null}</div>;
}
