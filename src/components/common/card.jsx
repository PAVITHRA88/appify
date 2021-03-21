import React from 'react';
import avatar from '../../assets/images/person.jpeg';

const Card = ({ user, score }) => {
    const scoreText = score !== null ? `${user.name} scored ${score} out of 5` : 'Try your first word-memory game!'
    return <div className="container">

        <div className="card" style={{ width: "400px" }}>
            <img className="card-img-top" src={avatar} alt="Card image" style={{ width: "100%" }} />
            <div className="card-body">
                <h4 className="card-title">{user.name}</h4>
                <h2 className="card-title">{user.mail}</h2>
                <p className="card-text">{scoreText}</p>
            </div>
        </div>

    </div>;
}

export default Card;