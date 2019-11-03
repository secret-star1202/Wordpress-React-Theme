import React, { useContext, useState } from 'react';
import PaginatorControlContext from './PaginatorControlContext.jsx';

let generateArray = function (n, k) {
  let retval = [];

  for (let i = (k !== undefined ? n : 1); i <= (k !== undefined ? k : n); i++) {
    retval.push(i);
  }

  return retval;
};

function truncatePageList(
  numberOfPages, maxPageTabs, currentPage
) {
  if (numberOfPages <= maxPageTabs) {
    return generateArray(numberOfPages);
  }

  let half = Math.floor(maxPageTabs / 2);

  if (currentPage === numberOfPages) {
    return generateArray(half).concat([null])
      .concat(generateArray(numberOfPages - half, numberOfPages));
  }

  if (currentPage <= half) {
    return generateArray(half * 2 - 1)
      .concat([null, numberOfPages - 1, numberOfPages]);
  }

  let quarter = Math.floor(half / 2);

  return [1, null].concat(
    generateArray(currentPage - quarter, currentPage + quarter)
  ).concat(currentPage + quarter < numberOfPages ? [null, numberOfPages] : []);
}

const PaginatorContainer = ({ children, ...rest }) => <div {...rest} style={{
  clear: 'both',
  width: '100%',
  margin: '0 auto'
}}>{children}</div>,
  PaginatorNumber = ({ num }) => (
   <a style={{ color: 'inherit', fontSize: 'inherit' }}>{num}</a>),
  PaginatorButton = ({
    num, order, children, active, activeTabColor, ...rest
  }) => {
    let [hover, setHover] = useState(false);
    let style = {
      textAlign: 'center',
      border: 'thin grey solid',
      padding: '5px',
      width: '35px',
      height: '35px',
      display: 'inline-block',
      fontSize: '1.15em',
    };
    if (order === 'first') {
      style.borderTopLeftRadius = '3px';
      style.borderBottomLeftRadius = '3px';
    }
    if (order === 'last') {
      style.borderTopRightRadius = '3px';
      style.borderBottomRightRadius = '3px';
    }
    if (hover && !active) {
      style.color = 'white';
      style.backgroundColor = 'black';
    } else if (active) {
      style.backgroundColor = activeTabColor;
      style.color = 'white';
    }

    return <li onMouseOver={() => setHover(true)} {...{ style }}
    onMouseOut={() => setHover(false)} {...rest}><PaginatorNumber num={num} /></li>;
  }, PaginatorList = ({ children }) => <ul style={{
    listStyle: 'none',
    paddingLeft: 0,
    display: 'inline'
  }}>{children}</ul>;

export default function PaginatorControls() {
  let { state, dispatch } = useContext(PaginatorControlContext),
    {
      maxPages, maxPageTabs, currentPage, truncate, activeTabColor
    } = state, truncated = truncate
      ? truncatePageList(maxPages, maxPageTabs, currentPage) : undefined;

  function isActive(page) {
    return currentPage === page;
  }

  return <PaginatorContainer>
    <PaginatorList>
      {currentPage > 1 && <PaginatorButton onClick={() => dispatch(
        { type: 'page', val: '-' }
      )} num={'<'} order="first" /> || null}
      {truncated ? (truncated.map((n, o) => <PaginatorButton {...{ activeTabColor }}
        onClick={(n !== null && !!n) ? () => dispatch({ type: 'page', val: n })
          : null} num={(n !== null && !!n) ? n : '⋯'}
            order={(o === 0 && currentPage > 1)
            ? 'first' : (o === truncated.length - 1
            && currentPage < maxPages) ? 'last' : ''}
          active={(n !== null && !!n) ? isActive(n) : false} />))
        : generateArray(maxPages).map(i => (
        <PaginatorButton {...{ activeTabColor }} num={i + 1} order='last'
          onClick={() => dispatch({ type: 'page', val: i + 1 })}
          active={isActive(i + 1)} />))}
      {currentPage < maxPages && <PaginatorButton onClick={() => dispatch(
        {
          type: 'page', val: '+'
        }
      )} num={'>'} /> || null}
    </PaginatorList>
  </PaginatorContainer>;
}
