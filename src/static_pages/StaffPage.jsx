import React, { useState, useEffect } from 'react';
import StaffItem from './StaffItem.jsx';
import getApiRequest from '../utils/get_api_request';
import HeadStuff from '../reusables/HeadStuff.jsx';

export default function StaffPage() {
  let [state, setState] = useState({
    staff: []
  });

  useEffect(function () {
    getApiRequest('staff', ({ data }) => {
      setState({
        staff: data
      });
    });
  });


  let { staff } = state;

  return [<HeadStuff title="Staff" />, <div>
    {staff.map(({
      member_bio: bio, member_name: name, member_role: role
    }) => <StaffItem {...{ bio, name, role }} />)}
  </div>];
}
