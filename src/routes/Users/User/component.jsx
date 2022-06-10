import {Link, useParams} from "react-router-dom";
import useGetUsers from "../../../hooks/useGetUsers"

import "./styles.css"

const User = () => {
    const { userId } = useParams();

    const user = useGetUsers("https://jsonplaceholder.typicode.com/users/" + userId)

    if(!userId) {
        return (
            <main style={{ padding: "1rem" }}>
                <p>Select user</p>
            </main>
        )
    } else if (user === 404) {
        return (
            <main style={{ padding: "1rem" }}>
                <p>404 not found!</p>
            </main>
            )
    }

    return (
        <main className="cards__unit-container">
            <article className="cards__unit">
                <h2>{user.name}</h2>
                <p className="cards__text">{user.name}</p>
                <p className="cards__text">{user.username}</p>
                <p className="cards__text">{user.email}</p>
                <p className="cards__text">{user.phone}</p>
                <p className="cards__text">{user.website}</p>
                <Link to="/users">Back</Link>
            </article>
        </main>

    );
}

export default User;