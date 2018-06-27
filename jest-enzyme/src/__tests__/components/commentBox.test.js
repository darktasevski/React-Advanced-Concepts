/* eslint-disable no-undef */
import React from 'react';

import CommentBox from '../../components/CommentBox';

describe('<CommentBox />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<CommentBox />);
	});

	it('should render', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should have textarea', () => {
		expect(wrapper.find('textarea').length).toBe(1);
	});

	it('should have button', () => {
		expect(wrapper.find('button').length).toBe(1);
	});

	it('should have correct class name', () => {
		expect(wrapper.hasClass('comment__box')).toBe(true);
	});

	describe('Input group test', () => {
		beforeEach(() => {
			wrapper.find('.comment_field').simulate('change', { target: { value: 'new comment' } });
		});

		it('should show entered text', () => {
			expect(wrapper.state().comment).toBe('new comment');
		});

		it('should clear input after submit ', () => {
			wrapper.setProps({ saveComment: data => data });
			wrapper.find('.comment__button').simulate('click');
			expect(wrapper.state().comment).toBe('');
		});

		it('should call saveComment on submit', () => {
			const saveComment = jest.fn();
			wrapper.setProps({ saveComment });
			wrapper.find('.comment__button').simulate('click');
			expect(saveComment).toBeCalled();
		});
	});
});
