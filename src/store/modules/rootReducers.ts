import { combineReducers } from 'redux';

import cart from './cart/reducer';

export const rootReducers = combineReducers({ cart });

export type RootState = ReturnType<typeof rootReducers>;
