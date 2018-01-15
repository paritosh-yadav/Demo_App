/**
 * Root Reducer
 */
import { combineReducers } from 'redux';
import landingPage from './landing-page/reducer';
import nav from './router/reducer';

const rootReducer = combineReducers({
    landingPage,
    nav
})

export default rootReducer