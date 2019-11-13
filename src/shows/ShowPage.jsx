import React from 'react';
import { useApiRequest, useSlug } from '../hooks';
import { HeadStuff, BackButton } from '../reusables';
import PlaylistTable from './PlaylistTable';
import {
  NotFoundRedirect, renderSummary, entitiesToText, parseDate, daysOfWeek, toLocalStr
} from '../utils';

export default function ShowPage() {
  let slug = useSlug(), showInfo = useApiRequest(undefined, `show?id=${slug}`,
    function (data, fxn) {
      fxn(data.show.status !== 404 ? data : null);
    });

  if (showInfo) {
    let { show, persona, playlist } = showInfo, {
        title, description, image, start, end
      } = show, { name } = persona,
      startDate = parseDate(start), endDate = parseDate(end);

    return [<HeadStuff title={entitiesToText(title)}
      description={renderSummary(description, 50)} />,
        <BackButton href='shows' className='show__link' text="Show Schedule" />,
        <div className="show__wrapper">
          <div className="show__content">
            <div className='show__image-div'>
              <img className='show__image' src={image} />
            </div>
            <div className='show__info'>
              <h5>Hosted by {name}</h5>
              <h5 className='show__time'>
                {daysOfWeek[startDate.getDay()]}{'s '}
                {`${toLocalStr(startDate)}-${toLocalStr(endDate)}`}
              </h5>
              <p className='show__body' dangerouslySetInnerHTML=
                {{ __html: description }} />
            </div>
            <div>
              <PlaylistTable tracks={playlist} />
            </div>
          </div>
        </div>];
  }

  return <NotFoundRedirect check={showInfo} />;
}
