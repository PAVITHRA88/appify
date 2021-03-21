import React from 'react';
import { getUserScore } from '../services/authService';

const Score = () => {
    const score = getUserScore();
    return <h1>Score:{score}/5</h1>;
}

export default Score;