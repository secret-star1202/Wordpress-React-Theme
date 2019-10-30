import React from 'react';

export default function ShowItem({
  show: {
    start, end, image, title, description
  }
}) {
  function formattedTime(startHour, startMinute, endHour, endMinute) {
    if (startMinute === 1) {
      startMinute--;
    }
    if (endMinute === 59) {
      endHour = (endHour + 1) % 24;
      endMinute = 0;
    }
    return `${startHour}:${
      (startMinute < 10 ? '0' : '') + startMinute}-${endHour}:${endMinute}`;
  }

  let startDate = new Date(start).toLocaleTimeString({ timeZone: 'Pacific/Honolulu' }).replace(':00 ', ' '),
    endDate = new Date(end).toLocaleTimeString({ timeZone: 'Pacific/Honolulu' }).replace(':00 ', ' '),
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
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div></div>;
}
