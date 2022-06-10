import { Route, Routes } from "react-router-dom";

import UsersHome from "../UsersHome"
import Users from "../Users"
import User from "../Users/User"
import PostsForm from "../../forms/PostsForm";

const UserApp = () => {
    return (
        <Routes>
            <Route path="/" element={<UsersHome/>}/>
            <Route path="users" element={<Users/>}>
                <Route index element={<User/>}/>
                <Route path=":userId" element={<User/>}/>
            </Route>
            <Route path="posts" element={<PostsForm/>}/>
            <Route
                path="*"
                element={
                    <main>
                        <p>404! There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    )
}

export default UserApp;