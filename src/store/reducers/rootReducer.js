import authReducer from './authReducer'
import feedReducer from './feedReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from	 'react-redux-firebase'


const rootReducer= combineReducers({
	auth:authReducer,
	feed: feedReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer

});

export default rootReducer