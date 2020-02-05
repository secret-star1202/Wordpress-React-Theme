import React, { useContext } from 'react';
import { useApiRequest, useSlug } from '../hooks';
import { HeadStuff, BackButton } from '../reusables';
import PlaylistTable from './PlaylistTable';
import AboutTheDJ from './AboutTheDJ';
import {
  NotFoundRedirect, renderSummary, entitiesToText, parseDate, daysOfWeek, toLocalStr
} from '../utils';
import PlayingContext from '../contexts/PlayingContext';

export default function ShowPage() {
  let slug = useSlug(), wpspin_profiles = useApiRequest(undefined, `wpspin_profiles/id=${slug}`), showInfo = useApiRequest(undefined, `show?id=${slug}`,function (data, fxn) {
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
      description={renderSummary(description || 'This is a good show.', 50)} />,
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
                <AboutTheDJ {...personas[0]} />
              </div>
            </div>
            <div>
              <h4>Latest Playlist - {
                parseDate(latestEpisode.start).toLocaleDateString()}</h4>
              {latestEpisodeLink
                && latestEpisodeLink.data.ktuh_latest_show_archive !== false
                && latestEpisodeLink.data.ktuh_latest_show_archive[0]
                ? <button onClick={function () {
                  switchUrl(latestEpisodeLink.data.ktuh_latest_show_archive[0], true);
                }}>Play Latest Episode</button> : null}
              <PlaylistTable tracks={playlist} />
            </div>
          </div>
        </div>];
  }

  return <NotFoundRedirect check={showInfo} />;
}
