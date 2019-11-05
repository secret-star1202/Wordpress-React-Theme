import React from 'react';
import { default as StaffItem } from './StaffItem';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { default as HeadStuff } from '../reusables/HeadStuff';

export default function () {
  let staff = useApiRequest([], 'staff', (data, fxn) => {
    if (data) fxn(data);
  });

  return [<HeadStuff title="Staff" />, <div>{staff.map(({
    member_bio: bio, member_name: name, member_role: role
  }) => <StaffItem {...{ bio, name, role }} />)}
  </div>];
}
