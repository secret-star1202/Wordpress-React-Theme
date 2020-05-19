import React from 'react';
import { useSlug, useApiRequest } from '../hooks';
import { default as HeadStuff } from '../reusables/HeadStuff';
import { SocialButton } from './ProfileSocialLink';
import {BackButton, SamePageAnchor} from '../reusables';
import { NotFoundRedirect } from '../utils';

function ProfilePage() {
  let slug = useSlug(), persona = useApiRequest(undefined, `persona_by_dj_slug?slug=${slug}`),
    dj_bio = useApiRequest(undefined, `dj_bio_by_slug?slug=${slug}`, (data, fxn) => {
      if (data && data.length) {
        fxn(data && data.length ? data[0] : null);
      } else fxn(null);
    });

  if (persona && dj_bio) {
    let {
        bio, name, image
      } = persona, {
        website_url, show_url, soundcloud_link: [soundcloud_link],
        instagram_link: [instagram_link], twitter_link: [twitter_link],
        facebook_link: [facebook_link]
      } = dj_bio;
    return [<HeadStuff title={`${name}'s Profile`}
      description={`${name}'s Profile`} image={image}/>,
        <div> {show_url.length ? <BackButton href={show_url} className='show__link' text="Show Page" /> : null} </div>,
        <div className="profile__image-div">
        <img className='profile__pic' src={image}/>
      </div>,
      <div className='profile'>
          <div className='profile__left'>
              <div className='profile__name'>
                  <h5>{name}</h5>
              </div>
              <div className='show-links'>
              {website_url.length ? <SocialButton url={website_url} site='globe' /> : null}
              {soundcloud_link.length ? <SocialButton url={soundcloud_link} site='soundcloud' /> : null}
              {instagram_link.length ? <SocialButton url={instagram_link} site='instagram' /> : null}
              {twitter_link.length ? <SocialButton url={twitter_link} site='twitter' /> : null}
              {facebook_link.length ? <SocialButton url={facebook_link} site='facebook' /> : null}
              </div>
              <div className='profile__bio' dangerouslySetInnerHTML={{
                __html: bio || `<i>(${name} hasn't filled out a bio yet.)</i>`
              }}/>
          </div>
      </div>];
  }

  return <NotFoundRedirect check={persona} />;
}

export default ProfilePage;
