import React, { useContext } from 'react';
import useSlugRequest from '../hooks/useSlugRequest';
import { HeadStuff, BackButton, Glyph } from '../reusables';
import PlaylistTable from './PlaylistTable';
import {
  NotFoundRedirect, renderSummary, entitiesToText, parseDate, daysOfWeek, toLocalStr
} from '../utils';
import PlayingContext from '../contexts/PlayingContext';
import { getFullUrl } from '../utils/url_utils';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';

export default function ShowPage() {
  let wpspin_profiles = useSlugRequest(undefined,
      (slug) => `wpspin_profiles?${slug.match(/^\d+$/) ? 'id' : 'slug'}=${slug}`,
      function (data, fxn) {
        fxn(data ? data[0] : null);
      }), showInfo = useSlugRequest(undefined,
      (slug) => `show?${slug.match(/^\d+$/) ? 'id' : 'slug'}=${slug}`,
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
                {description ? <h5>Show Description</h5> : null}
                <div className='show__body' dangerouslySetInnerHTML=
                  {{ __html: description }} />
              </div>
              {(names.length > 0)
                  ? <div className="show-page__button-multiple"> {personaInfo.map(({slug: profileSlug, title: {rendered}}) => (
                      <SamePageAnchor className="show-page__profile-link" href={getFullUrl(`profile/${profileSlug}`)}>
                        {`${rendered}'${(rendered.endsWith('s') || rendered.endsWith('z')) ? '' : 's'} DJ Profile`}
                      </SamePageAnchor>))} </div>
                  : <div className="show-page__button"> {personaInfo.map(({slug: profileSlug, title: {rendered}}) => (
                      <SamePageAnchor className="show-page__profile-link" href={getFullUrl(`profile/${profileSlug}`)}>
                        {`${rendered}'${(rendered.endsWith('s') || rendered.endsWith('z')) ? '' : 's'} DJ Profile`}
                      </SamePageAnchor>))} </div>
              }
            </div>
            {wpspin_profiles.facebook_link[0] || wpspin_profiles.instagram_link[0] || wpspin_profiles.soundcloud[0] || wpspin_profiles.mixcloud_link[0] || wpspin_profiles.website[0] ? <div className="show-page__social-container">
            <div className="show-links">
              <h5 className= "show-page__social-title">Find {title} online</h5>
              {wpspin_profiles.website[0] ? <div className="show-page__social-icons"><a href={wpspin_profiles.website[0]} target="_blank"><Glyph symbol="globe" type='fa' /></a></div> : <></>}
              {wpspin_profiles.facebook_link[0] ? <div className="show-page__social-icons"><a href={wpspin_profiles.facebook_link[0]} target="_blank"><Glyph symbol="facebook" type='fa' /></a></div> : <></>}
              {wpspin_profiles.instagram_link[0] ? <div className="show-page__social-icons"><a href={wpspin_profiles.instagram_link[0]} target="_blank"><Glyph symbol="instagram" type='fa' /></a></div> : <></>}
              {wpspin_profiles.soundcloud[0] ? <div className="show-page__social-icons"><a href={wpspin_profiles.soundcloud[0]} target="_blank"><Glyph symbol="soundcloud" type='fa' /></a></div> : <></>}
              {wpspin_profiles.mixcloud_link[0] ? <div className="show-page__social-icons"><a href={wpspin_profiles.mixcloud_link[0]} target="_blank"><Glyph symbol="mixcloud" type='fa' /></a></div> : <></>}
            </div>
          </div> : null}
          </div>
          <div className="show-page__playlist">
            <h4>Latest Episode </h4><h3>{
              parseDate(latestEpisode.start).toLocaleDateString()}</h3>
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
