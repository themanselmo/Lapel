import { Button, Stack } from '@mui/material';
import CollectionCard from './CollectionCard';

const MainHub = ({ user }) => {
	const renderCards = user.collections.map((collection) => {
		return <CollectionCard collection={collection}/>;
	});

	return (
		<div id="Main-Hub">
			<div style={{ textAlign: "center"}}>
				<h1>Welcome {user.username}!</h1>
				<Button>Create Collection</Button>
				<Button>Delete Collection</Button>
			</div>
			
			<Stack direction="row" spacing={10} alignItems="flex" justifyContent="center"> 
				{renderCards}
			</Stack>
			
		</div>
	);
};

export default MainHub;
