import React, { Suspense } from 'react';
import { createResource } from './PersonApi';
import Person from './Person';
import Num from './Num';

const resource = createResource();

function App() {
	return (
		<div className="App">
			<Suspense fallback={<h1>Loading...</h1>}>
				<Person resource={resource}></Person>
			</Suspense>

			<Suspense fallback={<h2>Number loading...</h2>}>
				<Num resource={resource}></Num>
			</Suspense>
		</div>
	);
}

export default App;
