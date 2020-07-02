import React from 'react';
import { SamePageAnchor } from '../reusables';
import { getFullUrl, getUploadedImage } from '../utils/url_utils';

export default function () {
  return [<div className='home_podcast-item'>
    <SamePageAnchor href={getFullUrl('podcasts/the-future-accords')}>
      <img className="podcast__image" src={getUploadedImage('2020/03/The-Future-Accords.jpg')}
        href={getFullUrl('podcasts/the-future-accords')}/>
        <SamePageAnchor href={getFullUrl('podcasts/the-future-accords')}>
          <h4>The Future Accords</h4>
        </SamePageAnchor>
      </SamePageAnchor>
    </div>,
    <div className='home_podcast-item'>
     <SamePageAnchor href={getFullUrl('podcasts/kwok-talk')}>
      <img className="podcast__image" src={getUploadedImage('2020/06/kwoktalk.png')}
        href={getFullUrl('podcasts/kwok-talk')}/>
        <SamePageAnchor href={getFullUrl('podcasts/kwok-talk')}>
          <h4>Kwok Talk</h4>
        </SamePageAnchor>
      </SamePageAnchor>
    </div>,
    <div className='home_podcast-item'>
      <SamePageAnchor href={getFullUrl('podcasts/ktuh-news')}>
        <img className="podcast__image" src={getUploadedImage('2020/07/news.png')}
          href={getFullUrl('podcasts/ktuh-news')}/>
          <SamePageAnchor href={getFullUrl('podcasts/ktuh-news')}>
            <h4>KTUH News</h4>
          </SamePageAnchor>
    </SamePageAnchor>
  </div>];
}
