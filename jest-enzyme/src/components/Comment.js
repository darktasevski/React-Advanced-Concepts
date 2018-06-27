import React from 'react';

const Comment = ({ comment }) => {
	return (
		<ul className="comment">
			<p className="comment__content">{comment.content}</p>
			<small className="comment__author">{comment.author}</small>
		</ul>
	);
};

export default Comment;
