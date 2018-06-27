/* eslint-disable no-undef */

import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from '../../components/CommentList';
import CommentBox from '../../components/CommentBox';
import { App } from '../../App';

describe('<App />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should Match a Snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render CommentList component', () => {
		expect(wrapper.find(CommentList).length).toBe(1);
	});

	it('should render CommentBox component', () => {
		expect(wrapper.find(CommentBox).length).toBe(1);
	});
});
