import { combineReducers } from 'redux';
import currencies from './currencies';

const reducers = combineReducers({
    currencies,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
