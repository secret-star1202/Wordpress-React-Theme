import React, { useContext } from 'react';
import { useApiRequest, useSlug } from '../hooks';
import { HeadStuff, BackButton } from '../reusables';
import PlaylistTable from './PlaylistTable';
import AboutTheDJ from './AboutTheDJ';
import {
  NotFoundRedirect, renderSummary, entitiesToText, parseDate, daysOfWeek, toLocalStr, getUploadedImage
} from '../utils';
import PlayingContext from '../contexts/PlayingContext';

export default function ShowPage() {
  let slug = useSlug(), wpspin_profiles = useApiRequest(undefined, `wpspin_profiles/?id=${slug}`), showInfo = useApiRequest(undefined, `show?id=${slug}`,function (data, fxn) {
    fxn(data.show.status !== 404 ? data : null);
  },
      function (data, fxn) {
        fxn(data.show.status !== 404 ? data : null);
      }), { switchUrl } = useContext(PlayingContext);



  if (showInfo) {
    let {
        show, personas, playlist, latestEpisode, latestEpisodeLink
      } = showInfo, {
        title, description, image, start, end
      } = show, names = personas.map(({ name }) => name).join(', '),
      startDate = parseDate(start), endDate = parseDate(end);

    if (wpspin_profiles) {
      let {
          mixcloud_link, soundcloud, instagram_link, facebook_link
        } = wpspin_profiles, {
          title, description, image, start, end
        } = show, names = personas.map(({ name }) => name).join(', '),
        startDate = parseDate(start), endDate = parseDate(end);

    return [<HeadStuff title={entitiesToText(title)}
      description={renderSummary(description, 50)} />,
        <BackButton href='shows' className='show__link' text="Show Schedule" />,
        <div className="show__wrapper">
          <div className="show__content">
            <div className='show__image-div'>
              <img className='show__image' src={image} />
              <div className='show__info'>
                <h5>Hosted by {names}</h5>
                <h5 className='show__time'>
                  {daysOfWeek[startDate.getDay()]}{'s '}
                  {`${toLocalStr(startDate)}-${toLocalStr(endDate)}`}
                </h5>
                <div>
                  <h5>Show Description</h5>
                  <div className='show__body' dangerouslySetInnerHTML=
                    {{ __html: description }} />
                </div>
              </div>
              <h5>Find {title} on social media</h5>
              <div className="show-links">
                <img className="show-facebook-img" src={getUploadedImage('2020/02/facebook_black.png')} href={facebook_link}/>
                <img className="show-instagram-img" src={getUploadedImage('2020/02/transparent-instagram.png')} href={instagram_link}/>
                <img className="show-soundcloud-img" src={getUploadedImage('2020/02/soundcloud_logo.png')} href={soundcloud}/>
                <img className="show-mixcloud-img" src={getUploadedImage('2020/02/mixcloud-trans.png')} href={mixcloud_link}/>
              </div>
              <div className='show-page__profile-link'>
                <AboutTheDJ {...personas[0]} />
              </div>
            </div>
            <h4>Latest Playlist - {parseDate(latestEpisode.start).toLocaleDateString()}</h4>
            <div className='show__page-playlist'>
            <PlaylistTable tracks={playlist} />
            </div>
          </div>
        </div>];
    }

    return <NotFoundRedirect check={showInfo} />;
  }
}
