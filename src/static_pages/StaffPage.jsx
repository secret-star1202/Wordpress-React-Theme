import React from 'react';
import StaffItem from './StaffItem.jsx';
import useApiRequest from '../hooks/useApiRequest';
import HeadStuff from '../reusables/HeadStuff.jsx';

export default function StaffPage() {
  let state = useApiRequest({
    staff: []
  }, 'staff', (staff, fxn) => {
    fxn({
      staff
    });
  });

  let { staff } = state;

  return [<HeadStuff title="Staff" />, <div>{staff.map(({
    member_bio: bio, member_name: name, member_role: role
  }) => <StaffItem {...{ bio, name, role }} />)}
  </div>];
}
