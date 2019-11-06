import React from 'react';
import { useApiRequest, useSlug } from '../hooks';
import { default as HeadStuff } from '../reusables/HeadStuff';
import { default as BackButton } from '../reusables/BackButton';
import { default as NotFoundRedirect } from '../utils/404_redirect';
import { default as renderSummary } from '../utils/summary';
import { default as entitiesToText } from '../utils/html_entities';
import { default as parseDate, daysOfWeek, toLocalStr } from '../utils/date_funcs';

export default function ShowPage() {
  let slug = useSlug(), show = useApiRequest(undefined, `show?id=${slug}`);

  if (show) {
    let {
        title, description, image, start, end
      } = show,
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
