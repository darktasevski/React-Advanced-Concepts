import types from './types';

export const saveComment = data => ({
	type: types.SAVE_COMMENT,
	payload: data,
});
