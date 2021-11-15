import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './components/App';
// import CollectionDetail from './components/CollectionDetail';

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			{/* <Route path=":collectionName" element={<CollectionDetail />} /> */}

			<Route path="/" element={<App />}></Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
);
