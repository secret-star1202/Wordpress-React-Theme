import React from 'react';
import { useApiRequest, useSlug } from '../hooks';
import { HeadStuff, BackButton } from '../reusables';
import {
  NotFoundRedirect, renderSummary, entitiesToText, parseDate
} from '../utils';

export default function ShowPage() {
  let slug = useSlug(), state = useApiRequest({
      show: undefined
    }, `show?id=${slug}`, (show, fxn) => {
      fxn({ show });
    }), { show } = state;

  if (show) {
    let {
        title, description, image, start, end
      } = show,
      startDate = parseDate(start), endDate = parseDate(end);

    return [<HeadStuff title={entitiesToText(title)}
      description={renderSummary(description, 50)} />,
        <BackButton href='shows' className='show__link' text="← Show Schedule" />,
        <div className="show__wrapper" key='show-wrapper'>
          <div className="show__content">
            <div className='show__image-div'>
              <img className='show__image' src={image} />
            </div>
            <div className='show__info'>
              <h5 className='show__time'>
                {['Sun', 'Mon', 'Tues', 'Wednes',
                  'Thurs', 'Fri', 'Satur'][startDate.getDay()]}{'days '}
                {`${startDate.toLocaleTimeString({
                  timeZone: 'Pacific/Honolulu'
                }).replace(':00 ', ' ')}-${endDate.toLocaleTimeString({
                  timeZone: 'Pacific/Honolulu'
                }).replace(':00 ', ' ')}`}
              </h5>,
              <p className='show__body' dangerouslySetInnerHTML=
                {{ __html: description }} />
            </div>
          </div>
        </div>];
  }

  return <NotFoundRedirect check={show} />;
}
