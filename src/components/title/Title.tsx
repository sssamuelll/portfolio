import React from 'react';
import './Title.css';
import ProfilePic from '../ProfilePic/ProfilePic';

const Title: React.FC = () => {
    return (
        <div className="description-container">
        <div className="title-container">
            <div className="hero-image">
                
                    <ProfilePic />
                
            </div>
            <div className='space-box'></div>
            <div className="title hero-title">
            <div className="row hero-greeting">Hello! 👋</div>
                <div className="row">My name is Samuel Dario</div>
                <div className="row hero-subtitle subtitle">
                    I'm a Software Composer and a Music Developer
                </div>
            </div>
        </div>
        <div className="portfolio-heading text">
            Explore my journey through software, music, and life as a digital nomad
        </div>
        </div>
    );
};

export default Title;
