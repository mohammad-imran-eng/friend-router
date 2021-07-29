import { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

function Home() {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div>
            <h1>Friends: {friends.length}</h1>
            {
                friends.map(friend => <Friend friend={friend} key={friend.id} />)
            }
        </div>
    );
}

export default Home;
