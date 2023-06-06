import { compose, combineReducers, legacy_createStore } from 'redux';
// import { combineReducers, legacy_createStore, compose } from 'redux'

import { IStayState, stayReducer } from './stay/stay.reducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
export interface RootState {
  stayModule: IStayState
}

const rootReducer = combineReducers({
  stayModule: stayReducer,
})

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  : undefined

export const store = legacy_createStore(rootReducer, middleware)
