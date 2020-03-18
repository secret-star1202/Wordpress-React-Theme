import React from 'react';
import PodcastItem from './PodcastItem';
import { getFullUrl } from '../utils/url_utils';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { HeadStuff, SamePageAnchor } from '../reusables';

export default function PodcastList() {
  let podcasts = useApiRequest([], 'podcast_series');

  return [<HeadStuff title="KTUH Podcasts" />,
<<<<<<< Updated upstream
=======
    <h4 className="podcast-page__desc">Student run podcasts from the only station that loves you. Streaming all the time on Apple Podcasts, Spotify, Soundcloud, Google Play and everywhere podcasts are heard.</h4>,
    <div className="podcast-grid__cover">
>>>>>>> Stashed changes
    <div className='grid__container'>
      <h4>Student run podcasts from the only station that loves you. Streaming all the time on Apple Podcasts, Spotify, Soundcloud, Google Play and everywhere podcasts are heard.</h4>
      <div className="grid__item"><img className="podcast__image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2020/03/The-Future-Accords.jpg" href={getFullUrl(`podcasts/thefutureaccords`)}/><a href={getFullUrl(`podcasts/thefutureaccords`)}><h4>The Future Accords</h4></a></div>
      <div className="grid__item"><img className="podcast__image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl(`podcasts/kwoktalk`)}/><a href={getFullUrl(`podcasts/kwoktalk`)}><h4>Kwok Talk</h4></a></div>
      <div className="grid__item"><img className="podcast__image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl(`podcasts/ktuhnews`)}/><a href={getFullUrl(`podcasts/ktuhnews`)}><h4>KTUH News</h4></a></div>
      <div className="grid__item"><img className="podcast__image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl(`podcasts/triviashock`)}/><a href={getFullUrl(`podcasts/triviashock`)}><h4>Trivia Shock</h4></a></div>
      <div className="grid__item"><img className="podcast__image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl(`podcasts/speakingscience`)}/><a href={getFullUrl(`podcasts/speakingscience`)}><h4>Speaking Science</h4></a></div>
      <div className="grid__item"><img className="podcast__image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl(`podcasts/hawaiiagdiscovery`)}/><a href={getFullUrl(`podcasts/kwoktalk`)}><h4>Hawaii AG Discovery</h4></a></div>
      <div className="grid__item"><img className="podcast__image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl(`podcasts/studentsustainabilitycoalition`)}/><a href={getFullUrl(`podcasts/kwoktalk`)}><h4>Student Sustainability Coalition</h4></a></div>
      <div className="grid__item"><img className="podcast__image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl(`podcasts/interviews`)}/><a href={getFullUrl(`podcasts/interviews`)}><h4>Interviews</h4></a></div>
      <div className="grid__item"><img className="podcast__image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl(`podcasts/talkshows`)}/><a href={getFullUrl(`podcasts/talkshows`)}><h4>Talk Shows</h4></a></div>
      </div>, <div className='grid__item__submit'><div className='submit__podcast'>
      <div className='submit__podcast'><h3><SamePageAnchor href={getFullUrl('submit-podcasts')}>
<<<<<<< Updated upstream
  Submit a podcast</SamePageAnchor></h3></div></div></div>];
=======
        Submit a podcast</SamePageAnchor></h3></div></div></div></div>];
>>>>>>> Stashed changes
}
