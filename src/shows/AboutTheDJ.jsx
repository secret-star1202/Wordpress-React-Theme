import React from 'react';

export default function AboutTheDJ({ name, bio }) {
  return <div>
    <h5>About {name}</h5>
    {bio.length ? <div dangerouslySetInnerHTML={{ __html: bio }} />
      : <div>
      <p>{name} is a very awesome DJ with some great jams on their show!</p>
    </div>}
  </div>;
}
