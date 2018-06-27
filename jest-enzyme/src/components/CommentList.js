import React from 'react';

import Comment from './Comment';

const CommentList = props => {
	return (
		<ul className="comment__list">
			{props.comments &&
				props.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
		</ul>
	);
};

export default CommentList;
