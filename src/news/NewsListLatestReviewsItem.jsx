import React from 'react';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';
import { getFullUrl, getFeaturedImg } from '../utils/url_utils';

export default function NewsListLatestReviewsItem({
  review: {
    slug, artist: [artist], title, _embedded
  }
}) {
  let src = getFeaturedImg(_embedded);

  return <div className='news-list__latest-review'>
    <SamePageAnchor href={getFullUrl(`reviews/${slug}`)}>
      <img {...{ src }} />
      <p><b>{artist}</b></p>
      <p>{(title.rendered || title[0]).replace(/&#(\d+);/, function (match, p1) {
        return String.fromCharCode(parseInt(p1, 10));
      }).replace(new RegExp(artist + ' – ', 'i'), '')}</p>
    </SamePageAnchor>
  </div>;
}
