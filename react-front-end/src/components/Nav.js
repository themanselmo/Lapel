import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Nav = () => {
	const logOut = () => {
		localStorage.setItem('username', '');
	};

	return (
		<div id="nav" style={{ borderTopWidth: '30px', textAlign: 'center' }}>
			<Link to={`/home`}>
				<Button>Home</Button>
			</Link>
			<Link to={`/feed`}>
				<Button>Feed</Button>
			</Link>
			<Link to={`/`}>
				<Button onClick={logOut}>Logout</Button>
			</Link>
		</div>
	);
};

export default Nav;
