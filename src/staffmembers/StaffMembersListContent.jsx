import React from 'react';
import StaffMemberItem from './StaffMemberItem.jsx';
import useApiRequest from '../hooks/useApiRequest';
import HeadStuff from '../reusables/HeadStuff.jsx';

function StaffMembersListContent() {
  let state = useApiRequest({ staffmembers: [] }, 'staff', (staffmembers, fxn) => {
      fxn({ staffmembers });
    }), { staffmembers } = state;

  return [<HeadStuff title="KTUH Staff" />,
    <div className='news-list__content'>
      <div className='staff-list'>
        {staffmembers.length ? staffmembers.map(
          item => <StaffMemberItem {...{ item }} />
        ) : null}
      </div>
    </div>];
}

export default StaffMembersListContent;
