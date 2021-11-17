import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './components/App';
import CollectionDetail from './components/CollectionDetail';
import Header from './components/Header';

import MainHub from './components/MainHub';
import Feed from './components/Feed';
import FeedCollectionDetail from './components/FeedCollectionDetail';

ReactDOM.render(
	<BrowserRouter>
		<Header />
		
		<Routes>
			<Route 
				path="/feed"
				element={<Feed />}
			/>
			<Route 
				path="/feed/collections/:collectionId"
				element={<FeedCollectionDetail />}
			/>
			<Route
				path="/collections/:collectionId"
				// this path (:collectionId) is a placeholder variable(maybe not the right word) for
				// the element wrapping our "View More" button in CollectionCard.js

				// When clicking in on "View More" in CollectionCard.js, we pass the
				// collection.id into this path. If we are clicking a collection with an ID of
				// 20, we will go to "/collections/20"

				element={<CollectionDetail />}
			/>
			<Route 
				path="/home"
				element={<MainHub />}
			/>
			{/* Use the router to render the CollectionDetail coming from a button press
      in the CollectionCard componenet */}
			<Route path="/" element={<App />}></Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
);
