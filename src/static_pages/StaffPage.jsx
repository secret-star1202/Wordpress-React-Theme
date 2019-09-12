import React, { useState, useEffect } from 'react';
import { Metamorph } from 'react-metamorph';
import StaffItem from './StaffItem.jsx';
import getApiRequest from '../utils/get_api_request';

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

  return [<Metamorph description="KTUH Staff" title=
    "KTUH Staff - KTUH FM Honolulu | Radio for the People" image=
      'https://ktuh.org/img/ktuh-logo.jpg' />, <h2 className='general__header'>
      Staff</h2>, <div>
        {staff.map(({
          member_bio: bio, member_name: name, member_role: role
        }) => <StaffItem {...{ bio, name, role }} />)}
      </div>];
}
