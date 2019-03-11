import authReducer from './authReducer'
import feedReducer from './feedReducer'
import { combineReducers } from 'redux'

const rootReducer= combineReducers({
	auth:authReducer,
	feed: feedReducer

});

export default rootReducer