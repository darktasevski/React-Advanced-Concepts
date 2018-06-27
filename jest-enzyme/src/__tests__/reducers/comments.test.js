import commentsReducer from '../../Redux/reducers/commentsReducer';

describe('commentsReducer ', () => {
	let state;

	beforeEach(() => {
		state = {
			comments: [],
			isLoading: false,
			error: '',
		};
	});

	it('should return initial state', () => {
		expect(commentsReducer(undefined, {})).toEqual(state);
	});

	it('should start fetching comments', () => {
		expect(commentsReducer(state, { type: 'FETCH_COMMENTS' }).isLoading).toBe(true);
	});

	it('should save comment to state', () => {
		const action = {
			type: 'SAVE_COMMENT',
			payload: {
				id: 56826,
				content: 'Another comment',
				author: 'PuritanicG',
			},
		};

		expect(commentsReducer(state, action).comments[0]).toEqual(action.payload);
	});
});
