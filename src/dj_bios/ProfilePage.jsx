import React from 'react';
import { useSlug, useApiRequest } from '../hooks';
import { default as HeadStuff } from '../reusables/HeadStuff';

function ProfilePage() {
  let slug = useSlug(), persona = useApiRequest(null, `persona_by_dj_slug?slug=${slug}`);

  if (persona) {
    let {
      bio, name, image
    } = persona;
    return [<HeadStuff title={`${name}'s Profile`}
    description={`${name}'s Profile`} image={image} />,
    <div className='profile'>
      <div className='profile__left'>
        <img className='profile__pic' src={image} />
        <div className='profile__info'>
        <div className='profile__bio' dangerouslySetInnerHTML={{
          __html: bio || `<i>(${name} hasn't filled out a bio yet.)</i>`
        }} />
      </div>
      </div>

    </div>];
  }

  return null;
}

export default ProfilePage;
