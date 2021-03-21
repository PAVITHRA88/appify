import React from 'react';
import { getCurrentUser, getUserScore } from '../services/authService';
import Card from './common/card';

const User = () => {
    const user = getCurrentUser();
    const score = getUserScore();

    return <Card user={user} score={score} />
}

export default User;