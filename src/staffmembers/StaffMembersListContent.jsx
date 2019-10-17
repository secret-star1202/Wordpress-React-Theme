import React, { useState, useEffect } from 'react';
import StaffMemberItem from './StaffMemberItem.jsx';
import { getApiRequest } from '../utils/url_utils';
import HeadStuff from '../reusables/HeadStuff.jsx';

function StaffMembersListContent() {
  let [state, setState] = useState({
    staffmembers: []
  });

  let { staffmembers } = state;

  useEffect(function () {
    if (!staffmembers.length) {
      getApiRequest('staff', (data) => {
        setState({ staffmembers: data.length ? data : [] });
      });
    }
  }, []);

  return [<HeadStuff title="KTUH Staff" />,
    <div className='news-list__content'>
      <div className='news-list'>
        {staffmembers.length ? staffmembers.map(
          member => <StaffMemberItem item={member} />
        ) : null}
      </div>
    </div>];
}

export default StaffMembersListContent;
