import authReducer from './authReducer'
import feedReducer from './feedReducer'
import { combineReducers } from 'redux'
import {firestoreReducer } from 'redux-firestore'

const rootReducer= combineReducers({
	auth:authReducer,
	feed: feedReducer,
	firestore: firestoreReducer

});

export default rootReducer