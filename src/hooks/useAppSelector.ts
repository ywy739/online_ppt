import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from '../store';

// For useSelector, it saves us the need to type (state: RootState) every time.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
