import React from 'react';

import './styles.scss'

const Card = ({post}) => {
    return (
        <div className="card">
            <div className="content">
                <h2>{post.userId}</h2>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        </div>
    )
}

export default Card