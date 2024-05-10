import React from 'react';
import './Banner.css';
import Survey from '../Survey/Survey';

const Banner = () => {
    return (
        <div className="banner">
            <h1>Do I need a pap smear?</h1>
            <p>This website is intended to help people understand the current guidelines for Pap smears. After answering a few questions, the website will provide a tailored recommendation for you. </p>
            <p>This is not a substitute for expert medical care. If you need a provider in Rhode Island for care, please click on PROVIDERS. To begin, fill out the questions below.</p>
            <Survey />
        </div>
    );
};

export default Banner;