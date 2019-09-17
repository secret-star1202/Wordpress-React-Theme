import React from 'react';

export default function ContentBox({
  children, content, className = '', isP
}) {
  let obj = {
      dangerouslySetInnerHTML: {
        __html: content
      }
    }, Element = props => (isP ? <p {...props} /> : <div {...props} />);

  return children ? <Element {...{ className }}>{children}</Element>
    : <Element {...{ className }} {...obj} />;
}
