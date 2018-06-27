/* eslint-disable no-undef */
import { saveComment } from '../../Redux/actions/commentsActions';

describe('Comment redux actions', () => {
	describe('Save comment', () => {
		it('should have correct structure', () => {
			const comment = {
				title: 'Test title',
				description: 'Just a comment',
				author: 'PuritanicD',
			};
			const expectedAction = {
				type: 'SAVE_COMMENT',
				payload: comment,
			};
			expect(saveComment(comment)).toEqual(expectedAction);
		});
	});
});
