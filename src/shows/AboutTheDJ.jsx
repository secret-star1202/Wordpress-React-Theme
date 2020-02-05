import React, { useState } from 'react';

export default function AboutTheDJ({ name, bio }) {
  return <div>
    <h5>About {name}</h5>
    {bio && bio.length ? <div dangerouslySetInnerHTML={{ __html: bio }} />
      : <div>
      <p>{name} is a very awesome DJ with some great jams on their show!</p>
    </div>}
  </div>;
}

export function AboutMultipleDJs({ personas }) {
  let [current, setCurrent] = useState(0);

  return [<AboutTheDJ {...personas[current]} />, <div>
    <button onClick={() => {
      setCurrent((current - 1 > 0 ? current : personas.length) - 1);
    }}>{'<<'}</button>
    <button onClick={() => {
      setCurrent((current + 1) % personas.length);
    }}>{'>>'}</button>
  </div>];
}
