import { combineReducers } from 'redux'
import configureStore from './store'
import rootSaga from '../saga'

export default () => {
  const rootReducer = combineReducers({
    countRedux: require('./count.redux').reducer,
  })

  return configureStore(rootReducer, rootSaga);
}