import User from './User';

import data from './mockData';

import './styles.css';

const Users = () => (
    <div className="cards__container">
        {data.map(post => <User key={post.id} {...post} />)}
    </div>
)

export default Users;
