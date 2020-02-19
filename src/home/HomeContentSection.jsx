import React from 'react';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { default as MoreButton } from './MoreButton';
import { default as HomeSection } from './HomeSection';
import { getFullUrl } from '../utils/url_utils';

export default function ({
  apiUrl, perPage, href, headText, moreText, outerDivClass, innerDivClass,
  itemComp: ItemComp
}) {
  let items = useApiRequest([], `${apiUrl}?_embed&per_page=${perPage}`);

  return <div className={outerDivClass}>
    <HomeSection {...{ href: getFullUrl(href), text: headText }} />
    <MoreButton {...{ href: getFullUrl(href), type: moreText }} />
    <div className={innerDivClass}>
      {items.map((item) => (<ItemComp {...{ item }} />))}
    </div>
  </div>;
}
