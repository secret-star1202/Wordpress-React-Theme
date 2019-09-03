import useGeneralContext from './useGeneralContext';

export default function useParamMatch(prms) {
  let { generalState: { match: { params } } } = useGeneralContext(),
    retval = {};

  prms.forEach((prm) => {
    retval[prm] = params[prm];
  });

  return retval;
}
