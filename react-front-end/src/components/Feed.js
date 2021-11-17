import { useEffect, useState } from "react"
import FeedCard from "./FeedCard"
import Nav from "./Nav"

const Feed = () => {
    // fetch for all collections that dont belong to the current user
    const [collections, setCollections] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:9292/feed/${localStorage.getItem('username')}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCollections(data)
        })
    }, [])
    
    const renderCards = collections.map((c) => {
		return (
			<FeedCard
				collection={c}
			/>
		);
	});

    return (
        <div id="feed">
            <Nav />
            <div id="feed-form" style={{ textAlign: "center", padding: "20px"}}>
                <input></input>
                <button>Search</button>
            </div>
            <div id="collection-container" style={{ 
						display: "flex", 
						flexWrap: "wrap",
						justifyContent: "space-evenly",
						padding: "20px"
						}}>
                {renderCards}
            </div>
        </div>
    )
}

export default Feed