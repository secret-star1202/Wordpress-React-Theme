import useGeneralContext from './useGeneralContext';

export default function useSlug() {
  let { generalState: { match: { params: { slug } } } } = useGeneralContext();
  return slug;
}
