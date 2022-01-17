import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import FeedCard from './FeedCard';

import Nav from './Nav';

const Feed = () => {
	// fetch for all collections that dont belong to the current user
	const [collections, setCollections] = useState([]);
	const [search, setSearch] = useState('');
	const [loaded, setLoaded] = useState(false);
	const [inputData, setInputData] = useState('');
	useEffect(() => {
		fetch(`http://localhost:9292/feed/${localStorage.getItem('username')}`)
			.then((res) => res.json())
			.then((data) => {
				setCollections(data);
			});
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setLoaded(true);
		}, 500);
	}, []);

	let filteredCollection = collections.filter((c) => {
		return c.collection_name.toLowerCase().includes(search);
	});

	const renderCards = filteredCollection.map((c) => {
		return <FeedCard collection={c} />;
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearch(inputData);
	};

	return (
		<div>
			{loaded ? (
				<div id="feed">
					<Nav />
					<div
						id="feed-form"
						style={{ textAlign: 'center', padding: '20px' }}
					>
						<form onSubmit={(e) => handleSubmit(e)}>
							<input
								onChange={(e) => {
									if (e.target.value === '') {
										setSearch('');
									}
									setInputData(e.target.value);
								}}
								defaultValue=""
							></input>
							<button>Search</button>
						</form>
					</div>
					<div
						id="collection-container"
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'space-evenly',
							padding: '20px',
						}}
					>
						{renderCards}
					</div>
				</div>
			) : (
				<CircularProgress
					style={{
						margin: 'auto',
						display: 'flex',
						paddingTop: '100px;',
						alignItems: 'center',
					}}
				/>
			)}
		</div>
	);
};

export default Feed;
