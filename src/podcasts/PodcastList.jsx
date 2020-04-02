import React from 'react';
import { getFullUrl } from '../utils/url_utils';
import { HeadStuff, SamePageAnchor } from '../reusables';

export default function PodcastList() {
  return [<HeadStuff title="KTUH Podcasts" />,
    <h4 className="podcast-page__desc">Student run podcasts from the only station that loves you. Streaming all the time on Apple Podcasts, Spotify, Soundcloud, Google Play and everywhere podcasts are heard.</h4>,
      <div className="podcast-grid__cover">
      <div className='grid__container'>
      <SamePageAnchor href={getFullUrl('podcasts/the-future-accords')}><div className="grid__item"><img className="podcast__page-image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2020/03/The-Future-Accords.jpg" href={getFullUrl('podcasts/the-future-accords')}/><SamePageAnchor href={getFullUrl('podcasts/the-future-accords')}><h4>The Future Accords</h4></SamePageAnchor></div></SamePageAnchor>
      <SamePageAnchor href={getFullUrl('podcasts/kwok-talk')}><div className="grid__item"><img className="podcast__page-image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl('podcasts/kwok-talk')}/><SamePageAnchor href={getFullUrl('podcasts/kwok-talk')}><h4>Kwok Talk</h4></SamePageAnchor></div></SamePageAnchor>
      <SamePageAnchor href={getFullUrl('podcasts/renegade-radio')}><div className="grid__item"><img className="podcast__page-image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2020/03/renegade-radio-logo-2020-compressed.png" href={getFullUrl('podcasts/renegade-radio')}/><SamePageAnchor href={getFullUrl('podcasts/renegade-radio')}><h4>Renegade Radio</h4></SamePageAnchor></div></SamePageAnchor>
      <SamePageAnchor href={getFullUrl('podcasts/ktuh-news')}><div className="grid__item"><img className="podcast__page-image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl('podcasts/ktuh-news')}/><SamePageAnchor href={getFullUrl('podcasts/ktuh-news')}><h4>KTUH News</h4></SamePageAnchor></div></SamePageAnchor>
      <SamePageAnchor href={getFullUrl('podcasts/trivia-shock')}><div className="grid__item"><img className="podcast__page-image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl('podcasts/trivia-shock')}/><SamePageAnchor href={getFullUrl('podcasts/trivia-shock')}><h4>Trivia Shock</h4></SamePageAnchor></div></SamePageAnchor>
      <SamePageAnchor href={getFullUrl('podcasts/interviews')}><div className="grid__item"><img className="podcast__page-image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl('podcasts/interviews')}/><SamePageAnchor href={getFullUrl('podcasts/interviews')}><h4>Interviews</h4></SamePageAnchor></div></SamePageAnchor>
      <SamePageAnchor href={getFullUrl('podcasts/talk-shows')}><div className="grid__item"><img className="podcast__page-image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl('podcasts/talk-shows')}/><SamePageAnchor href={getFullUrl('podcasts/talk-shows')}><h4>Talk Shows</h4></SamePageAnchor></div></SamePageAnchor>
      <SamePageAnchor href={getFullUrl('podcasts/more-podcasts')}><div className="grid__item"><img className="podcast__page-image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl('podcasts/more-podcasts')}/><SamePageAnchor href={getFullUrl('podcasts/more-podcasts')}><h4>More Podcasts</h4></SamePageAnchor></div></SamePageAnchor>
      </div>,
      <div className='grid__item__submit'>
      <div className='submit__podcast'><h3><SamePageAnchor href={getFullUrl('submit-podcasts')}>
          Submit a podcast</SamePageAnchor></h3></div></div></div>];
}
