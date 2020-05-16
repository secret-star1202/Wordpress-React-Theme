import React from 'react';
import {useSlug, useApiRequest} from '../hooks';
import {default as HeadStuff} from '../reusables/HeadStuff';
import {SocialButton} from './ProfileSocialLink';
import {default as SamePageAnchor} from '../reusables/SamePageAnchor';
import {BackButton, Glyph} from "../reusables";

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
                           description={`${name}'s Profile`} image={image}/>,
            <div>{show_url && show_url[0].length ?
                <BackButton href={show_url[0]} className='show__link' text="Show Page"/> : null}</div>,
            <div className="profile__image-div">
                <img className='profile__pic' src={image}/>
            </div>,
            <div className='profile'>
                <div className='profile__left'>
                    <div className='profile__name'>
                        <h5>{name}</h5>
                    </div>
                    <div className='profile__bio' dangerouslySetInnerHTML={{
                    __html: bio || `<i>(${name} hasn't filled out a bio yet.)</i>`
                }}/>
                    {website_url.length ? <div className='show-links'>
                        <a href={website_url}><Glyph symbol='globe' type='fa'/></a>
                        {facebook_link.length ? <a href={facebook_link}><Glyph symbol='facebook' type='fa'/></a> : null}
                        {instagram_link.length ? <a href={instagram_link}><Glyph symbol='instagram' type='fa'/></a> : null}
                        {twitter_link.length ? <a href={twitter_link}><Glyph symbol='twitter' type='fa'/></a> : null}
                        {soundcloud_link.length ? <a href={soundcloud_link}><Glyph symbol='soundcloud' type='fa'/></a> : null}
                    </div>}
                </div>
            </div>];
    }

    return null;
}

export default ProfilePage;
