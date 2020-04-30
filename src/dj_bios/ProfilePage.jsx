import React from 'react';
import { useSlug, useApiRequest } from '../hooks';
import { default as HeadStuff } from '../reusables/HeadStuff';
import { SocialButton } from './ProfileSocialLink';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';

function ProfilePage() {
  let slug = useSlug(), persona = useApiRequest(null, `persona_by_dj_slug?slug=${slug}`),
    dj_bio = useApiRequest(null, `dj_bio_by_slug?slug=${slug}`, (data, fxn) => {
      if (data && data.length) {
        fxn(data[0]);
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
    description={`${name}'s Profile`} image={image} />,
    <div className='profile'>
      <div className='profile__left'>
        <img className='profile__pic' src={image} />
        <div className='profile__info'>
        <div className='profile__bio' dangerouslySetInnerHTML={{
          __html: bio || `<i>(${name} hasn't filled out a bio yet.)</i>`
        }} />
        {website_url.length ? <SocialButton url={website_url} site='globe' /> : null}
        {soundcloud_link.length ? <SocialButton url={soundcloud_link} site='soundcloud' /> : null}
        {instagram_link.length ? <SocialButton url={instagram_link} site='instagram' /> : null}
        {twitter_link.length ? <SocialButton url={twitter_link} site='twitter' /> : null}
        {facebook_link.length ? <SocialButton url={facebook_link} site='facebook' /> : null}
        {show_url && show_url[0].length ? <div><SamePageAnchor href={show_url[0]}>
          Show Page
        </SamePageAnchor></div> : null}
      </div>
      </div>

    </div>];
  }

  return null;
}

export default ProfilePage;
