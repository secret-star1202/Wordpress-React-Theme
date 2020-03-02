import React from 'react';
import PlaylistTable from '../shows/PlaylistTable';
import PlaylistSidebar from './PlaylistSidebar';
import { HeadStuff, SamePageAnchor } from '../reusables';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { getFullUrl } from '../utils/url_utils';

function PlaylistList() {
  let info = useApiRequest(undefined, 'latest_playlist');

  function renderHost({ personas }) {
    return `Hosted by ${personas[0].name}`;
  }

  if (info) {
    let { show, playlist, slug } = info;
    return [<HeadStuff title="Show Playlists"
        description="KTUH Show Playlists"
        image='https://ktuh.org/img/ktuh-logo.jpg'/>,
      <div className='playlist-list__latest'>
          <SamePageAnchor href={getFullUrl(`shows/${slug.length ? slug : show.id}`)}>
            <img className='playlist__show-image' src={show.image}/>
          </SamePageAnchor>
        <h3 className='playlist-list__show-name'>
          {show.title}
        </h3>
        <h5 className='playlist-list__show-host'>
          {renderHost(show)}
        </h5>
        <PlaylistTable tracks={playlist} onPage={false}/>
      </div>,
      <PlaylistSidebar />
    ];
  }
  return null;
}

export default PlaylistList;
