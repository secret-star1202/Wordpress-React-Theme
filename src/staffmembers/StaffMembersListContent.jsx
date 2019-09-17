import React, { useState, useEffect } from 'react';
import { Paginator } from 'react-everafter';
import StaffMemberItem from './StaffMemberItem.jsx';
import { getApiRequest } from '../utils/url_utils';

function StaffMembersListContent() {
  let [state, setState] = useState({
    staffmembers: []
  });

  let { staffmembers } = state;

  useEffect(function () {
    if (!staffmembers.length) {
      getApiRequest('staffmember', ({ data }) => {
        setState({ staffmembers: data.length ? data : [] });
      });
    }
  }, []);

  return <div className='news-list__content'>
    <div className='news-list'>
      {staffmembers.length ? <Paginator wrapper={StaffMemberItem} perPage={4} items={staffmembers}
        truncate={true} /> : <p>No results.</p>}
    </div>
  </div>;
}

export default StaffMembersListContent;
