import { useState } from "react"

const NewCollection = ({ addNewCollection, user }) => {
    const [name, setName] = useState("")
    
    const stuff = {
        name: name,
        user_id: user.id
    }

    const configObj = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify( stuff ),
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // make post to create a new collection
        fetch("http://localhost:9292/collections", configObj)
            .then(res => res.json())
            .then(collection => addNewCollection(collection))
    }

    return (
        <div style={{ textAlign: "center"}}>
            <h3>Add a new collection:</h3>
            <form onSubmit={handleSubmit}>
                <label name="name">Name:</label>
                <input 
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewCollection