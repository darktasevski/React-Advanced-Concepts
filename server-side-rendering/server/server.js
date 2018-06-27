import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Home from './src/components/Home';

const PORT = 5050 || process.env.PORT;
const app = express();

app.get('/', (req, res) => {
	const content = renderToString(<Home />);
	res.send(content);
});

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
