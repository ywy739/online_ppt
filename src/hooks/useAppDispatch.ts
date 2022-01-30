import { useDispatch } from 'react-redux';

import { AppDispatch } from '../store';

// For useDispatch, the default Dispatch type does not know about thunks. In order to correctly dispatch thunks, we can use the specific customized AppDispatch type from the store that includes the thunk middleware types.
export const useAppDispatch = () => useDispatch<AppDispatch>();
