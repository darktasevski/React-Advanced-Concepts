const fetchPerson = () => {
	return fetch('https://randomuser.me/api')
		.then(x => x.json())
		.then(res => res.results[0]);
};

const wrapPromise = promise => {
	let status = 'pending'; // Track if the promise is complete, loading or error
	let result = '';
	let suspender = promise.then(
		// We're here just waiting for the promise
		r => {
			status = 'success';
			result = r;
		},
		err => {
			status = 'error';
			result = err;
		}
	);

	// return a function which is going to read - check the status of the promise
	return {
		read() {
			if (status === 'pending') {
				// React expects from us to throw a promise if it's pending so it can catch it
				throw suspender;
			} else if (status === 'error') {
				throw result;
			} else {
				return result;
			}
		},
	};
};

export const randomNumber = () => {
	return new Promise(res => setTimeout(() => res(Math.random() * 50), 3000));
};

export const createResource = () => {
	return {
		person: wrapPromise(fetchPerson()),
		num: wrapPromise(randomNumber()),
	};
};
