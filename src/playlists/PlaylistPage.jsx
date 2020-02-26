import React from 'react';
import PlaylistTable from '../shows/PlaylistTable';
import MetaThing from '../reusables/MetaThing';
import { useSlug } from '../hooks/useGeneralContext';
import { default as useApiRequest } from '../hooks/useApiRequest';

function PlaylistPage() {
  let id = useSlug(), info = useApiRequest(undefined,
    `playlist?id=${id.replace(/\/$/, '')}`);

  if (info) {
    let { show, slug, playlist } = info;
    return [
    <MetaThing title={`${show.title} - KTUH FM Honolulu | Radio for the People`}
      description={show.title} image={show.image} />,
    <div className='playlist__link'>
      <a href='/playlists' className='back-to'>← Back to Playlists</a>
    </div>,
    <div className='playlist__content'>
      <a href={`/shows/${slug.length ? slug : show.id}`}>
        <img className='playlist__show-image' src={show.image ||
          'https://ktuh.org/img/ktuh-logo.jpg'} />
        </a>
      <PlaylistTable tracks={playlist} onPage={true}/>
    </div>];
  }
  return null;
}

export default PlaylistPage;
