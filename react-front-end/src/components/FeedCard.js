import { Button, Card, CardContent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeedCard = ({ collection }) => {

    const [cardOwner, setCardOwner] = useState('max')

    useEffect(() => {
        fetch(`http://localhost:9292/user/id/${collection.user_id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCardOwner(data)
        })
    })

    return (
        <Card variant="outlined" sx={{ 
            maxWidth: '250px', minWidth: '250px', margin:'20px',
            onHover: { backgroundColor: 'red'}}}
        >
			<CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
					Collection Owner: {cardOwner}
				</Typography>
				<Typography variant="h5">
					{' '}
					{collection.collection_name}{' '}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					Total Items: {collection.items.length}
				</Typography>
	
			</CardContent>
			<Link to={`/feed/collections/${collection.id}`}>
				<Button sx={{ textAlign: 'center' }}>View More</Button>
			</Link>
	    </Card>
    )
    
}

export default FeedCard