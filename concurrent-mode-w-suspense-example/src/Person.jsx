import React from 'react';

const Person = ({resource}) => {
	// If this thing is still loading it's going to throw a promise which will be caught by the parent Suspense component
	// Which is going to display a loading indicator. Otherwise we get our data
	const person = resource.person.read();

	return (
		<div>
			{person.name.first}
		</div>
	);
};

export default Person;