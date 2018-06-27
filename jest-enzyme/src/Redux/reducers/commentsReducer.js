import types from '../actions/types';

import comments from '../../fixtures';

const initialState = {
	comments: [],
	isLoading: false,
	error: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_COMMENTS:
			return { ...state, isLoading: true };
		case types.SAVE_COMMENT:
			return { ...state, isLoading: false, comments: [...state.comments, action.payload] };
		default:
			return state;
	}
};
