import { useContext } from 'react';
import TheRouterContext from '../contexts/TheRouterContext';
import useApiRequest from './useApiRequest';

function useSlug() {
  let { match: { params: { slug } } } = useContext(TheRouterContext);
  return slug.replace(/\/$/, '');
}

export default function useSlugRequest(init, template, callback) {
  let slug = useSlug(), state = useApiRequest(init, template(slug), callback);

  return state;
}
