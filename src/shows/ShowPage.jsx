import React, { useContext } from 'react';
import { useApiRequest, useSlug } from '../hooks';
import { HeadStuff, BackButton, Glyph } from '../reusables';
import PlaylistTable from './PlaylistTable';
import {
  NotFoundRedirect, renderSummary, entitiesToText, parseDate, daysOfWeek, toLocalStr
} from '../utils';
import PlayingContext from '../contexts/PlayingContext';
import { getFullUrl } from '../utils/url_utils';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';

export default function ShowPage() {
  let slug = useSlug(), wpspin_profiles = useApiRequest(undefined,
      `wpspin_profiles?${slug.match(/^\d+$/) ? 'id' : 'slug'}=${slug}`,
      function (data, fxn) {
        fxn(data ? data[0] : null);
      }), showInfo = useApiRequest(undefined,
      `show?${slug.match(/^\d+$/) ? 'id' : 'slug'}=${slug}`,
      function (data, fxn) {
        fxn(data || null);
      }), { switchUrl } = useContext(PlayingContext);

  if (showInfo) {
    let {
        show, personas, playlist, latestEpisode, latestEpisodeLink, personaInfo
      } = showInfo, {
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
              {personaInfo.map(({ slug: profileSlug, title: { rendered } }) => (
                <SamePageAnchor href={getFullUrl(`profile/${profileSlug}`)}>
                  {`${rendered}'s Profile`}
              </SamePageAnchor>))}
            </div>
            {wpspin_profiles ? <div className="show-links">
              <a href={wpspin_profiles.facebook_link[0]}><Glyph symbol="facebook" type='fa' /></a>
              <a href={wpspin_profiles.instagram_link[0]}><Glyph symbol="instagram" type='fa' /></a>
              <a href={wpspin_profiles.soundcloud[0]}><Glyph symbol="soundcloud" type='fa' /></a>
              <a href={wpspin_profiles.mixcloud_link[0]}><Glyph symbol="mixcloud" type='fa' /></a>
            </div> : null}
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
