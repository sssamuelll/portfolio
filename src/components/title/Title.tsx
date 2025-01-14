import React from 'react';
import profilePic from '../../assets/profile_pic/photo.jpg';
import './Title.css';

const Title: React.FC = () => {
    return (
        <div className="title-container">
            <div className="hero-image">
                <div className="profile-container">
                    <img
                        src={profilePic}
                        alt="Samuel Dario"
                        className="profile-picture"
                    />
                </div>
            </div>
            <div className='space-box'></div>
            <div className="title hero-title">
                <div className="row">My name is Samuel Dario</div>
                <div className="row hero-subtitle subtitle">
                    I'm a Software Composer, Music Developer and a Digital Nomad
                </div>
            </div>
        </div>
    );
};

export default Title;
