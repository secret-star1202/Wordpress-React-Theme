import React from 'react';
import { useApiRequest, useSlug } from '../hooks';
import { HeadStuff, BackButton } from '../reusables';
import {
  NotFoundRedirect, renderSummary, entitiesToText, parseDate, daysOfWeek, toLocalStr
} from '../utils';

export default function ShowPage() {
  let slug = useSlug(), show = useApiRequest({
    showInfo: null,
    persona: null
  }, `show?id=${slug}`, function (showInfo, fxn) {
    if (showInfo) {
      fetch(showInfo._links.personas[0].href, (persona) => {
        fxn({ showInfo, persona });
      });
    }
  });

  if (show) {
    let {
        title, description, image, start, end
      } = show.showInfo, { name } = show.persona,
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
          </div>
        </div>];
  }

  return <NotFoundRedirect check={show} />;
}
