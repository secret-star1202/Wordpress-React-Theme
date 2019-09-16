import React from 'react';
import styled from 'styled-components';

export default function ContentBox({
  children, content, className = '', isP
}) {
  let obj = {
      dangerouslySetInnerHTML: {
        __html: content
      }
    }, Element = isP ? styled.p`` : styled.div;

  return children ? <Element {...{ className }}>{children}</Element>
    : <Element {...{ className }} {...obj} />;
}
