import React from 'react';

export default function ContentBox({ content, className }) {
  return <div {...{ className }} dangerouslySetInnerHTML={{ __html: content }} />;
}
