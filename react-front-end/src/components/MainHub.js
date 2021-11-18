import { Button, Snackbar, Grow, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useEffect, useState } from 'react';
import CollectionCard from './CollectionCard';
import Nav from './Nav';
import NewCollection from './NewCollection';

const MainHub = () => {
	// state variables
	const [showForm, setShowForm] = useState(false);
	const [deletingCollections, setDeletingCollections] = useState(false);
	const [collections, setCollections] = useState([]);
	const [user, setUser] = useState({
		username: '',
		password: '',
		collections: [],
	});

	const [open, setOpen] = useState(false);
	const [transition, setTransition] = useState(Grow);
	const [alertMessage, setAlertMessage] = useState('');

	// fetch user data on load
	useEffect(() => {
		fetch(
			`http://localhost:9292/user/collections/${localStorage.getItem(
				'username'
			)}`
		)
			.then((res) => res.json())
			.then((data) => {
				setUser(data);
				console.log(data);
				setCollections(data.collections);
			});
	}, []);

	// handles toggle state for deleting collections
	const handleDeletingCollections = () => {
		setDeletingCollections(!deletingCollections);
	};

	// handles toggle state for showing the form to add a collection
	const handleShowForm = () => {
		setShowForm(!showForm);
	};

	// adds a new collection to the collections state and displays a notification
	const addNewCollection = (newCollection) => {
		console.log(newCollection);
		setCollections([...collections, newCollection]);
		setAlertMessage('Collection Added!');
		handleClick(Grow);
	};

	// updates the collections state after a collection has been deleted
	const updateAfterDelete = (doomedCollection) => {
		const updatedCollections = collections.filter(
			(collection) => collection.id !== doomedCollection.id
		);
		setCollections(updatedCollections);
		setAlertMessage('Collection Deleted!');
		handleClick(Grow);
	};

	// deletes a collection and calls function to update state
	const deleteCollection = (doomedCollection) => {
		fetch(`http://localhost:9292/collection/${doomedCollection.id}`, {
			method: 'DELETE',
		}).then((res) => res.json());
		updateAfterDelete(doomedCollection);
	};

	// handles toggle state for displaying components to add / delete collections
	const manageCollection = () => {
		handleShowForm();
		handleDeletingCollections();
	};

	// renders collection cards dynamically according to collections state
	const renderCards = collections.map((c) => {
		return (
			<CollectionCard
				key={c.id}
				collection={c}
				deletingCollections={deletingCollections}
				deleteCollection={deleteCollection}
			/>
		);
	});

	// handles toggle state for popup notification
	const handleClose = () => {
		setOpen(false);
	};

	// handles toggle state for popup notification
	const handleClick = (transition) => {
		setOpen(true);
		setTransition(transition);
	};

	console.log('rendering main hub');
	return (
		<div>
			<Nav />
			{user ? (
				<div id="Main-Hub">
					<div style={{ textAlign: 'center' }}>
						<Typography variant="h4">
							Welcome {user.username}!
						</Typography>
						<Button onClick={manageCollection}>
							Manage Collections
						</Button>
					</div>

					<div>
						{showForm ? (
							<NewCollection
								user={user}
								addNewCollection={addNewCollection}
							/>
						) : null}
					</div>

					<div
						className="card-list"
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
			) : // loading
			null}

			<Snackbar
				open={open}
				onClose={handleClose}
				TransitionComponent={transition}
				autoHideDuration={2000}
				// message="Item Deleted!"
				key={transition.name}
			>
				<MuiAlert
					elevation={6}
					variant="filled"
					onClose={handleClose}
					severity="success"
					sx={{ width: '100%' }}
				>
					{alertMessage}
				</MuiAlert>
			</Snackbar>
		</div>
	);
};

export default MainHub;
