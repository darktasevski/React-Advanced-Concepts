import React, { Suspense, useState } from 'react';
import { wrapPromise } from './PersonApi';
import { createResource } from './PersonApi';
import PostResult from './PostResult';
import ErrorBoundary from './ErrorBoundary';
import Person from './Person';
import Num from './Num';

const initialResource = createResource();

function App() {
	// const [resource, setResource] = useState(() => createResource())
	const [resource, setResource] = useState(initialResource);
	const [postResource, setPostResource] = useState({
		result: {
			read() {
				return null;
			},
		},
	});

	return (
		<div className="App">
			<Suspense fallback={<h1>Loading...</h1>}>
				<ErrorBoundary>
					<Person resource={resource}></Person>
					<PostResult resource={postResource}></PostResult>
				</ErrorBoundary>
			</Suspense>

			<Suspense fallback={<h2>Number loading...</h2>}>
				<Num resource={resource}></Num>
			</Suspense>

			<button onClick={() => setResource(createResource())}>Refresh data</button>

			<button
				onClick={() => {
					const promise = fetch('https://enrdixyyuxes.x.pipedream.net/', {
						method: 'POST',
						body: JSON.stringify({ hello: 'World' }),
					})
						.then(x => x.json())
						.then(res => {
							console.log(res);
							return res;
						});

					setPostResource({ result: wrapPromise(promise) });
				}}
			>
				Post request!
			</button>
		</div>
	);
}

export default App;
