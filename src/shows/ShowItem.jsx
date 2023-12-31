import React from 'react';
import { default as parseDate, toLocalStr } from '../utils/date_funcs';
import { getFullUrl } from '../utils/url_utils';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';
import { default as renderSummary } from '../utils/summary';

export default function ShowItem({
  show: {
    start, end, image, title, slug, id, description, personas
  }
}) {
  let startDate = toLocalStr(parseDate(start)),
    endDate = toLocalStr(parseDate(end)),
    fmtStr = `${startDate} - ${endDate}`,
    djs = personas !== null ? (personas.length > 2 ? [
      personas[0].slug
        ? <SamePageAnchor href={getFullUrl(`profile/${personas[0].slug}`)}>{personas[0].name}</SamePageAnchor>
        : personas[0].name, ' and ',
      personas[1].slug
        ? <SamePageAnchor href={getFullUrl(`profile/${personas[1].slug}`)}>{personas[1].name}</SamePageAnchor>
        : personas[1].name,
      'and others'] : personas.map(({
      name, slug: djSlug
    }) => (djSlug ? <SamePageAnchor href={getFullUrl(`profile/${djSlug}`)}>{name}</SamePageAnchor> : name))) : null;

  if (djs && djs.length === 2) {
    djs = [djs[0], ' and ', djs[1]];
  }

  return <tr className='show-item'>
    <td className='show-item__time-div'>
      <h5 className={startDate.split(':')[0] > 9 ? 'show-item__start-time nudge-time' : 'show-item__start-time'}>
        {startDate}
      </h5>
      <div className="show-item__time-dash">-</div>
      <h5 className={endDate.split(':')[0] > 9 ? 'show-item__start-time nudge-time' : 'show-item__start-time'}>
        {endDate}
      </h5>
    </td>
    <td className="show-item__image-div">
      <img className='show-item__image' src={image} />
    </td>
    <td className='show-item__info-container'>
      <div className='show-item__info'>
        {slug ? <h4>
            <SamePageAnchor href={getFullUrl(`shows/${slug || id}`)}>{title}</SamePageAnchor>
          </h4>
          : <h4>
            <SamePageAnchor href={getFullUrl('join-ktuh')}>{title}</SamePageAnchor>
          </h4>
        }
        {personas ? <h6 className="show-item__host">Hosted by {djs}</h6> : null}
        {description ? <div className="show-item__summary">
          {renderSummary(description, 20)}</div> : null}
      </div>
    </td>
  </tr>;
}
