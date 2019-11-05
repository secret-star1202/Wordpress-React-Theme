import React from 'react';
import { default as groupBy } from '../utils/group_by';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';

export default function ({ items }) {
  const tree = groupBy(items, 'menu_item_parent'), topMost = tree['0'];

  return <ul className='nav navbar-nav navbar-left'>
    {topMost.map(function ({
      ID, url, target, title
    }) {
      let node = tree[ID];
      return <li className='dropdown'>
        <a href={node ? '#' : url}
           {...(node ? {
             className: 'dropdown-toggle',
             'data-toggle': 'dropdown',
             role: 'button',
             'aria-haspopup': 'true',
             'aria-expanded': 'false'
           } : {
             target: target !== '' ? target : '_self'
           })}>
          {title}
          {node ? <span className='caret' /> : null}
        </a>
        {node ? <ul className='dropdown-menu'>
          {node.map(function ({
            url: treeUrl, target: treeTarget, title: treeTitle
          }) {
            return <li>
              <SamePageAnchor href={treeUrl} target={treeTarget || '_self'}>
                {treeTitle}</SamePageAnchor></li>;
          })}
        </ul> : null}
      </li>;
    })}
  </ul>;
}
