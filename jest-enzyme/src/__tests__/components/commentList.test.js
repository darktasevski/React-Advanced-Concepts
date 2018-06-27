/* eslint-disable no-undef */
import React from 'react';

import { comments } from '../../fixtures';
import CommentList from '../../components/CommentList';
import Comment from '../../components/Comment';

describe('<CommentList />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<CommentList comments={comments} />);
	});

	it('should match snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render all comments available', () => {
		expect(wrapper.children().length).toEqual(comments.length);
	});

	it('should render <Comment /> for each comment', () => {
		expect(wrapper.find(Comment).length).toBe(comments.length);
	});
});
