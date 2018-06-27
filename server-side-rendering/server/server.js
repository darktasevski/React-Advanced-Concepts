import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../src/App';

const PORT = 5050 || process.env.PORT;

const app = express();

app.get('/', (req, res) => {
	const content = renderToString(<App />);

	res.send(content);
});

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
