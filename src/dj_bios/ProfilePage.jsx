import React, { useEffect } from 'react';
import ProfileSocialLink from './ProfileSocialLink';
import { useSlug, useApiRequest } from '../hooks';
import { default as HeadStuff } from '../reusables/HeadStuff';

function ProfilePage() {
  let slug = useSlug(), bio = useApiRequest(undefined,
    `posts?_embed&slug=${slug}`, (data, fxn) => {
      if (data) fxn(data.length > 0 ? data[0] : null);
    });

  if (bio) {
    let {
      persona_id, content: { rendered: body }, title: { rendered: name },
      website, twitter, facebook, snapchat, soundcloud, instagram
    } = bio;
    return [<HeadStuff title={`${name
    }'s Profile - KTUH FM Honolulu | Radio for the People`}
    description={`${name}'s Profile`} image={'https://ktuh.org/img/ktuh-logo.jpg'} />,
    <h2 className='general__header'>{name}</h2>,
    <div className='profile'>
      <div className='profile__left'>
        <img className='profile__pic' src={'https://ktuh.org/img/ktuh-logo.jpg'} />
        {(website || twitter || facebook || snapchat || soundcloud || instagram)
          && (<div className='profile__social-icons'>
            {[
              ['', website, 'website'],
              ['http://soundcloud.com/', soundcloud, 'soundcloud'],
              ['http://instagram.com/', instagram, 'instagram'],
              ['http://facebook.com/', facebook, 'facebook'],
              ['http://twitter.com/', twitter, 'twitter'],
              ['http://snapchat.com/add/', snapchat, 'snapchat']
            ].map((params) => ProfileSocialLink(...params))}
          </div>) || null}
      </div>
      <div className='profile__info'>
        <div className='profile__bio' dangerouslySetInnerHTML={{
          __html: body || `<i>(${name} hasn't filled out a bio yet.)</i>`
        }} />
      </div>
    </div>];
  }

  return <p>This user does not have a profile.</p>;
}

export default ProfilePage;
