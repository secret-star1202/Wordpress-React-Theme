import { useContext } from 'react';
import GeneralContext from '../contexts/GeneralContext';

export default function useGeneralContext() {
  let { generalState, setGeneralState } = useContext(GeneralContext);

  return { generalState, setGeneralState };
}
