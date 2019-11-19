import React from 'react';
import { default as parseDate, toLocalStr } from '../utils/date_funcs';
import { getFullUrl } from '../utils/url_utils';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';

export default function ShowItem({
  show: {
    start, end, image, title, id, description, personas
  }
}) {
  let startDate = toLocalStr(parseDate(start)), endDate = toLocalStr(parseDate(end)),
    fmtStr = `${startDate}-${endDate}`,
    djs = personas.map(({ name }) => name).join(', ');

  return [<tr className='show-item'>
    <td className='show-item__time-div'>
      <h4 className='show-item__start-time'>
      {startDate} -</h4>
    </td>
    <td rowSpan={2} className="show-item__image-div">
      <img className='show-item__image' src={image} />
    </td>
    <td rowSpan={2} className='show-item__info-container'>
      <div className='show-item__info'>
        <h5 className='show-item__info-time'>
          {fmtStr}
        </h5>
        <h4><SamePageAnchor href={getFullUrl(`shows/${id}`)}>
        {title}</SamePageAnchor>{` with ${djs}`}</h4>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </td>
  </tr>, <tr><td className='show-item__end-time-div'><h4 className='show-item__end-time'>
    {endDate}</h4></td></tr>];
}
