import React from 'react';
import Card from '../Card';
import CardMobile from '../CardMobile';
import './style.scss';


const Cards = ({ users }) => {

    return (
        <>
            {users && users.map(user => (
                <CardMobile
                    firstName={user.first_name}
                    lastName={user.last_name}
                    userId={user.id}
                    experience={user.workexperience}
                    avatar={user.photo}
                    key={user.id}
                />
            ))}
            {users && users.map(user => (
                <Card
                    key={user.id}
                    id={user.id}
                    firstName={user.first_name}
                    lastName={user.last_name}
                    userId={user.id}
                    experience={user.workexperience}
                    avatar={user.photo}
                    key={user.id}
                />
            ))}
        </>
    );
};

export default Cards;