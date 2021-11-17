import { useEffect, useState } from "react"
import FeedCard from "./FeedCard"
import Nav from "./Nav"

const Feed = () => {
    // fetch for all collections that dont belong to the current user
    const [collections, setCollections] = useState([])
    const [search, setSearch] = useState('')

    useEffect(()=> {
        fetch(`http://localhost:9292/feed/${localStorage.getItem('username')}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCollections(data)
        })
    }, [])
    
    const renderCards = (collectionsToRender) => {
        return collectionsToRender.map((c) => {
            return (
                <FeedCard
                    collection={c}
                />
                );
            });
    }

    const filterCollection = () => {
        console.log(search)
        if(search === ''){
            console.log('returning collections unedited!')
            return collections
        } else {
            console.log(search)
            return collections.filter(c => c.collection_name.includes(search))
        }
    }

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(e)
        setSearch(e.target[0].value)
    }

    return (
        <div id="feed">
            <Nav />
            <div id="feed-form" style={{ textAlign: "center", padding: "20px"}}>
                <form onSubmit={handleSearch}>
                    <input defaultValue=""></input>
                    <button>Search</button>
                </form>
                
            </div>
            <div id="collection-container" style={{ 
						display: "flex", 
						flexWrap: "wrap",
						justifyContent: "space-evenly",
						padding: "20px"
						}}>
                {renderCards(filterCollection())}
            </div>
        </div>
    )
}

export default Feed