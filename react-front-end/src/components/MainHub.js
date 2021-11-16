import { Button, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import CollectionCard from './CollectionCard';
import NewCollection from './NewCollection';


const MainHub = ({ user }) => {
	const [showForm, setShowForm] = useState(false)
	
	const [collections, setCollections] = useState([])
	
	useEffect(() => {
		setCollections(user.collections)
	}, [])

	const renderCards = collections.map((c) => {
		return <CollectionCard collection={c}/>;
	});

	const handleShowForm = () => {
		setShowForm(!showForm)
	}

	const addNewCollection = (newCollection) => {
		console.log(newCollection)
		setCollections([...collections, newCollection])
	}

	console.log("rendering main hub")
	return (
		<div id="Main-Hub">
			<div style={{ textAlign: "center"}}>
				<h1>Welcome {user.username}!</h1>
				<Button onClick={handleShowForm}>Create Collection</Button>
				<Button>Delete Collection</Button>
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
				alignItems: "space-evenly",
				padding: "20px"
				}}>
				{renderCards}
			</div>
				
			
			
		</div>
	);
};

export default MainHub;
