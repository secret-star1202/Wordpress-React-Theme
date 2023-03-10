import React from 'react';
import NewsListSidebarSupport from './NewsListSidebarSupport';
import NewsListLatestReviews from './NewsListLatestReviews';
import NewsListContent from './NewsListContent';
import HeadStuff from '../reusables/HeadStuff';

export default function NewsList() {
  return [
    <div className='header__wrapper'>
      <HeadStuff title="Radioblog" />
    </div>,
    <div className='news-list__wrapper'>
      <NewsListContent />
      <div className='news-list__sidebar'>
        <NewsListSidebarSupport />
        <NewsListLatestReviews />
      </div>
    </div>
    ];
}
