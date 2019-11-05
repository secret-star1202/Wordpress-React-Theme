import React from 'react';
import { default as parseDate, toLocalStr } from '../utils/date_funcs';
import { getFullUrl } from '../utils/url_utils';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';

export default function ShowItem({
  show: {
    start, end, image, title, id
  }
}) {
  let startDate = toLocalStr(parseDate(start)), endDate = toLocalStr(parseDate(end)),
    fmtStr = `${startDate}-${endDate}`;

  return <div className='show-item'><h4 className='show-item__time'>
    {fmtStr}</h4>
  <div className='show-item__image-div'>
    <img className='show-item__image' src={image} />
  </div>
  <div className='show-item__info-container'>
    <div className='show-item__info'>
      <h5 className='show-item__info-time'>
        {fmtStr}
      </h5>
      <h4><SamePageAnchor href={getFullUrl(`shows/${id}`)}>
        {title}</SamePageAnchor></h4>
    </div>
  </div></div>;
}
