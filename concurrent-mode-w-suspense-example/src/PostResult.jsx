import React from 'react';

const PostResult = ({ resource }) => {
	const data = resource.result.read();

	return <div>{data ? <p> Post {JSON.stringify(data)}</p> : <p>No data</p>}</div>;
};

export default PostResult;
