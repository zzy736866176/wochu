import { createStore , combineReducers, applyMiddleware } from 'redux'
import tabbarReducer from './TabbarReducer'
import listReducer from './ListReducer'
import promiseMiddleware from 'redux-promise'
const reducer = combineReducers({
    isTabbarShow : tabbarReducer,
    list : listReducer
})
const store = createStore(reducer,applyMiddleware(promiseMiddleware))
export default store