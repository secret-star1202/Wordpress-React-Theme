import React from 'react';
import { getFullUrl } from '../utils/url_utils';
import { HeadStuff, SamePageAnchor } from '../reusables';

export default function PodcastList() {
  return [<HeadStuff title="KTUH Podcasts" />,
    <div className='grid__container'>
      <h4>Student run podcasts from the only station that loves you. Streaming all the time on Apple Podcasts, Spotify, Soundcloud, Google Play and everywhere podcasts are heard.</h4>
      <div className="grid__item"><img className="podcast__image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2020/03/The-Future-Accords.jpg" href={getFullUrl('podcasts/the-future-accords')}/><SamePageAnchor href={getFullUrl('podcasts/the-future-accords')}><h4>The Future Accords</h4></SamePageAnchor></div>
      <div className="grid__item"><img className="podcast__image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl('podcasts/kwok-talk')}/><SamePageAnchor href={getFullUrl('podcasts/kwok-talk')}><h4>Kwok Talk</h4></SamePageAnchor></div>
      <div className="grid__item"><img className="podcast__image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl('podcasts/ktuh-news')}/><SamePageAnchor href={getFullUrl('podcasts/ktuh-news')}><h4>KTUH News</h4></SamePageAnchor></div>
      <div className="grid__item"><img className="podcast__image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl('podcasts/trivia-shock')}/><SamePageAnchor href={getFullUrl('podcasts/trivia-shock')}><h4>Trivia Shock</h4></SamePageAnchor></div>
      <div className="grid__item"><img className="podcast__image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl('podcasts/interviews')}/><SamePageAnchor href={getFullUrl('podcasts/interviews')}><h4>Interviews</h4></SamePageAnchor></div>
      <div className="grid__item"><img className="podcast__image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl('podcasts/talk-shows')}/><SamePageAnchor href={getFullUrl('podcasts/talk-shows')}><h4>Talk Shows</h4></SamePageAnchor></div>
      </div>, <div className='grid__item__submit'><div className='submit__podcast'>
      <div className='submit__podcast'><h3><SamePageAnchor href={getFullUrl('submit-podcasts')}>
        Submit a podcast</SamePageAnchor></h3></div></div></div>];
}
