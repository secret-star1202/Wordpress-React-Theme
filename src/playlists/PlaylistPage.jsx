import React from 'react';
import PlaylistTable from '../shows/PlaylistTable';
import { useSlug } from '../hooks/useGeneralContext';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { HeadStuff, SamePageAnchor, BackButton } from '../reusables';
import { getFullUrl } from '../utils/url_utils';

function PlaylistPage() {
  let id = useSlug(), info = useApiRequest(undefined,
    `playlist?id=${id.replace(/\/$/, '')}`);

  if (info) {
    let { show, slug, playlist } = info;
    return [
    <HeadStuff title={show.title} description={show.title} image={show.image} />,
    <BackButton className='playlist__link' href='playlists' text="Back to Playlists" />,
    <div className='playlist__content'>
      <SamePageAnchor href={getFullUrl(`shows/${slug.length ? slug : show.id}`)}>
        <img className='playlist__show-image' src={show.image ||
          'https://ktuh.org/img/ktuh-logo.jpg'} />
        </SamePageAnchor>
      <PlaylistTable tracks={playlist} onPage={true}/>
    </div>];
  }
  return null;
}

export default PlaylistPage;
