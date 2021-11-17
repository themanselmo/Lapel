import { Button, Snackbar, Grow } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CollectionCard from './CollectionCard';
import Nav from './Nav';
import NewCollection from './NewCollection';


const MainHub = () => {
	const [showForm, setShowForm] = useState(false)
	const [deletingCollections, setDeletingCollections] = useState(false)
	const [collections, setCollections] = useState([])
	const [user, setUser] = useState({
		username: "",
		password: "",
		collections: []
	})

	const [open, setOpen] = useState(false)
	const [transition, setTransition] = useState(Grow);
	const [alertMessage, setAlertMessage] = useState('')

	const navigate = useNavigate()

	// fetch user data on load
	useEffect(() => {
		fetch(`http://localhost:9292/user/collections/${localStorage.getItem('username')}`)
				.then((res) => res.json())
				.then((data) => {
					setUser(data);
					console.log(data);
					setCollections(data.collections)
				});
	}, [])

	const handleDeletingCollections = () => {
		setDeletingCollections(!deletingCollections);
	};

	const handleShowForm = () => {
		setShowForm(!showForm);
	};

	const addNewCollection = (newCollection) => {
		console.log(newCollection);
		setCollections([...collections, newCollection]);
		setAlertMessage('Collection Added!')
		handleClick(Grow)
	};

	const updateAfterDelete = (doomedCollection) => {
		const updatedCollections = collections.filter(
			(collection) => collection.id !== doomedCollection.id
		);
		setCollections(updatedCollections);
		setAlertMessage('Collection Deleted!')
		handleClick(Grow)
	};

	const deleteCollection = (doomedCollection) => {
		fetch(`http://localhost:9292/collection/${doomedCollection.id}`, {
			method: 'DELETE',
		}).then(res => res.json());
		updateAfterDelete(doomedCollection)
	};

	const manageCollection = () => {
		handleShowForm()
		handleDeletingCollections()
	}

	const renderCards = collections.map((c) => {
		return (
			<CollectionCard
				collection={c}
				deletingCollections={deletingCollections}
				deleteCollection={deleteCollection}
			/>
		);
	});

	const handleClose = () => {
		setOpen(false)
	};

	const handleClick = (transition) => {
		setOpen(true)
		setTransition(transition)
	}


	console.log("rendering main hub")
	return (
		<div>
			<Nav />
			{ user ? 
				<div id="Main-Hub">
					<div style={{ textAlign: "center"}}>
						<h1>Welcome {user.username}!</h1>
						<Button onClick={manageCollection}>Manage Collections</Button>
					</div>

					<div>
						{
							showForm ? 
							<NewCollection user={user} addNewCollection={addNewCollection}/> 
							: 
							null
						}
					</div>
					
					<div className="card-list" style={{ 
						display: "flex", 
						flexWrap: "wrap",
						justifyContent: "space-evenly",
						padding: "20px"
						}}>
						{renderCards}
					</div>
		
				</div>

			:
			// loading
			null
		}
			
			<Snackbar
					open={open}
					onClose={handleClose}
					TransitionComponent={transition}
					autoHideDuration={2000}
					// message="Item Deleted!"
					key={transition.name}
				>
					<MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%' }} >
						{alertMessage}
					</MuiAlert>
				</Snackbar>
		</div>
		
	);
};

export default MainHub;
