import { Button } from '@mui/material';
import CollectionCard from './CollectionCard';

const MainHub = ({ user }) => {
	console.log(user, user.collections);

	const renderCards = user.collections.map((collection) => {
		console.log({ collection });
		return <CollectionCard collection={collection} />;
	});

	return (
		<div>
			<h1>Welcome {user.username}!</h1>
			<Button>Create Collection</Button>
			<Button>Delete Collection</Button>
			{renderCards}
		</div>
	);
};

export default MainHub;
