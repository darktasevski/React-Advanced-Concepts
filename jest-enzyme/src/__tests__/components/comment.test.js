/* eslint-disable no-undef */
import React from 'react';

import { comments } from '../../fixtures';
import Comment from '../../components/Comment';

describe('<Comment />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Comment comment={comments[0]} />);
	});

	it('should match snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render correct data', () => {
		expect(wrapper.find('.comment__content').text()).toEqual(comments[0].content);
		expect(wrapper.find('.comment__author').text()).toEqual(comments[0].author);
	});
});
