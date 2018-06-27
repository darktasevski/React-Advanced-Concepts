import React from 'react';

class CommentBox extends React.Component {
	state = {
		comment: '',
	};

	onChange = e => this.setState({ comment: e.target.value });

	onSubmit = () => {
		const comment = {
			id: this.state.comment.length * Math.random() * 10,
			content: this.state.comment,
			author: 'Anon',
		};
		this.props.saveComment(comment);
		this.setState({ comment: '' });
	};

	render() {
		return (
			<div className="comment__box">
				<textarea
					onChange={this.onChange}
					value={this.state.comment}
					name="comment_field"
					className="comment_field"
					cols="30"
					rows="10"
				/>
				<button className="comment__button" onClick={this.onSubmit}>
					Submit
				</button>
			</div>
		);
	}
}

export default CommentBox;
