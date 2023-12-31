import React from 'react';
import PlaylistTable from '../shows/PlaylistTable';
import useSlugRequest from '../hooks/useSlugRequest';
import { HeadStuff, SamePageAnchor, BackButton } from '../reusables';
import { getFullUrl, getImgAsset } from '../utils/url_utils';

function PlaylistPage() {
  let info = useSlugRequest(undefined,
    (id) => `playlist?id=${id.replace(/\/$/, '')}`);

  if (info) {
    let { show, slug, playlist } = info;
    return [
    <HeadStuff title={show.title} description={show.title} image={show.image} />,
    <BackButton className='playlist__link' href='playlists' text="Back to Playlists" />,
    <div className='playlist__content'>
      <SamePageAnchor href={getFullUrl(`shows/${slug.length ? slug : show.id}`)}>
        <img className='playlist__show-image' src={show.image
          || getImgAsset('ktuh-logo.jpg')} />
        </SamePageAnchor>
      <PlaylistTable tracks={playlist} onPage={true}/>
    </div>];
  }
  return null;
}

export default PlaylistPage;
