import React from 'react';
import { default as parseDate, toLocalStr } from '../utils/date_funcs';
import { getFullUrl } from '../utils/url_utils';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';
import { default as renderSummary } from '../utils/summary';

export default function ShowItem({
  show: {
    start, end, image, title, id, description, personas
  }
}) {
  let showSummary = (function () {
    let theDiv = document.createElement('div');
    theDiv.innerHTML = description;
    return renderSummary(theDiv.innerText, 8);
  }());

  let startDate = toLocalStr(parseDate(start)), endDate = toLocalStr(parseDate(end)),
    fmtStr = `${startDate}-${endDate}`,
    djs = personas.length > 2 ? [personas[0].name, personas[1].name,
      'and others'].join(', ') : personas.map(({ name }) => name).join(', ');

  return [<tr className='show-item'>
    <td className='show-item__time-div'>
      <h4 className='show-item__start-time'>
      {startDate} -</h4>
      <h4 className='show-item__end-time'>
        {endDate}</h4>
    </td>
    <td rowSpan={2} className="show-item__image-div">
      <img className='show-item__image' src={image} />
    </td>
    <td rowSpan={2} className='show-item__info-container'>
      <div className='show-item__info'>
        <h5 className='show-item__info-time'>
          {fmtStr}
        </h5>
        <h4><SamePageAnchor href={getFullUrl(`shows/${id}`)}>{title}</SamePageAnchor></h4>
        <h6>Hosted by {djs}</h6>
        <div className="show-item__summary">{showSummary}</div>
      </div>
    </td>
  </tr>];
}
