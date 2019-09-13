import React from 'react';
import NewsListSidebarSupport from './NewsListSidebarSupport.jsx';
import NewsListLatestReviews from './NewsListLatestReviews.jsx';
import NewsListContent from './NewsListContent.jsx';
import HeadStuff from '../reusables/HeadStuff.jsx';

export default function NewsList() {
  return [<HeadStuff title="Radioblog" />,
  <div className='news-list__wrapper'>
    <NewsListContent />
    <div className='news-list__sidebar'>
      <NewsListSidebarSupport />
      <NewsListLatestReviews />
    </div>
  </div>];
}
