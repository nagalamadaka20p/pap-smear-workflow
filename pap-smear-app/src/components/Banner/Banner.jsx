import React from 'react';
import './Banner.css';
import Survey from '../Survey/Survey';

const Banner = () => {
    return (
        <div className="banner">
            <h1>Welcome to Pap Smear Screening</h1>
            <p>Fill out the questions below to see if you are eligible for a pap smear.</p>
            <Survey />
        </div>
    );
};

export default Banner;