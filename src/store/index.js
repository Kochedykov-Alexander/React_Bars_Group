import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { combineReducers } from 'redux'
import {userReducer} from './reducers/userReducer'
 


const rootReducer = combineReducers({
	user: userReducer,
	
})


export const store = createStore(rootReducer, composeWithDevTools())