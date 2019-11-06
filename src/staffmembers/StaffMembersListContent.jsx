import React from 'react';
import StaffMemberItem from './StaffMemberItem';
import useApiRequest from '../hooks/useApiRequest';
import HeadStuff from '../reusables/HeadStuff';

export default function StaffMembersListContent() {
  let staffmembers = useApiRequest([], 'staff', (data, fxn) => {
    if (data) fxn(data);
  });

  return [<HeadStuff title="KTUH Staff" />,
    <div className='news-list__content'>
      <div className='staff-list'>
        {staffmembers.map(
          item => <StaffMemberItem {...{ item }} />
        )}
      </div>
    </div>];
}
