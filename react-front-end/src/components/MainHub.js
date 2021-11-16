import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import CollectionCard from './CollectionCard';
import NewCollection from './NewCollection';


const MainHub = ({ user }) => {
	const [showForm, setShowForm] = useState(false)
	const [deletingCollections, setDeletingCollections] = useState(false)
	const [collections, setCollections] = useState([])

	useEffect(() => {
		setCollections(user.collections)
	}, [])

	

	const handleDeletingCollections = () => {
		setDeletingCollections(!deletingCollections)
	}

	const handleShowForm = () => {
		setShowForm(!showForm)
	}

	const addNewCollection = (newCollection) => {
		console.log(newCollection)
		setCollections([...collections, newCollection])
	}

	const updateAfterDelete = (doomedCollection) => {
		const updatedCollections = collections.filter(collection => collection.id !== doomedCollection.id)
		setCollections(updatedCollections)
	}

	const deleteCollection = (doomedCollection) => {
		fetch(`http://localhost:9292/collection/${doomedCollection.id}`, {
			method: "DELETE",
		})
		.then(updateAfterDelete(doomedCollection))
	}


	const renderCards = collections.map((c) => {
		return <CollectionCard 
		collection={c} 
		deletingCollections={deletingCollections}
		deleteCollection={deleteCollection}
		/>;
	});
	console.log("rendering main hub")
	return (
		<div id="Main-Hub">
			<div style={{ textAlign: "center"}}>
				<h1>Welcome {user.username}!</h1>
				<Button onClick={handleShowForm}>Create Collection</Button>
				<Button onClick={handleDeletingCollections}>Delete Collection</Button>
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
	);
};

export default MainHub;
