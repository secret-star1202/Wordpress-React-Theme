import React, { useContext, createElement } from 'react';
import TheRouterContext, { TheRouterContextProvider } from '../contexts/TheRouterContext';
import matchThePath from '../utils/match_the_path';

export default function TheRoute(props) {
  let context = useContext(TheRouterContext), location = props.location
    || context.location, history = props.history || context.history,
    match = matchThePath(location.pathname.replace(context.basename, ''), {
      path: props.path,
      exact: props.exact
    });

  return <TheRouterContextProvider value={{ ...context, location, match }}>
    {createElement(props.component, {
      history,
      location,
      match
    })}
  </TheRouterContextProvider>;
}
