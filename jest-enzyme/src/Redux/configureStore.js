import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import commentsReducer from './reducers/commentsReducer';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
	const store = createStore(
		combineReducers({
			comments: commentsReducer,
		}),
		composeEnhancers(applyMiddleware(thunk))
	);
	return store;
};
