import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import CommentList from './components/CommentList';
import CommentBox from './components/CommentBox';
import { saveComment } from './Redux/actions/commentsActions';

export class App extends Component {
	onSubmit = data => {
		return this.props.saveComment(data);
	};

	render() {
		console.log(this.props);
		return (
			<div className="App">
				<CommentList comments={this.props.comments.comments} />
				<CommentBox saveComment={this.onSubmit} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	comments: state.comments,
});

const mapDispatchToProps = dispatch => ({
	saveComment: data => dispatch(saveComment(data)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
