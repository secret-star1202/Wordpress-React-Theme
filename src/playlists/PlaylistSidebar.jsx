import React from 'react';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { getFullUrl } from '../utils/url_utils';
import { SamePageAnchor } from '../reusables';

function PlaylistSidebar() {
  let playlists = useApiRequest(undefined, 'last_playlists', (data, fxn) => {
    fxn(data.items);
  });

  if (playlists) {
    return (
      <div className='playlist__sidebar corner'>
        <h4 className='playlist__sidebar-header'>Browse Latest</h4>
          {playlists.map(function ({
            title, id
          }) {
            return <div>
              <p className='playlist__sidebar-link'>
                <SamePageAnchor href={getFullUrl(`playlists/${id}`)}>
                  {title}
                </SamePageAnchor>
              </p>
            </div>;
          })}
      </div>
    );
  }
  return null;
}

export default PlaylistSidebar;
