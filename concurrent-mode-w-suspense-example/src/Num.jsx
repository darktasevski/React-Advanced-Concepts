import React from 'react';

const Num = ({ resource }) => {
	const n = resource.num.read();
	return (
		<div>
			<p>Your random number is {n}</p>
		</div>
	);
};

export default Num;
