import React from 'react';
import './ProfilePic.css';
import profilePic from './assets/profile_pic.png';

interface ProfilePicProps {
    scaleTo?: number;
}

const ProfilePic: React.FC<ProfilePicProps> = ({scaleTo=1}) => {
    return (
        <div className="photo-container" style={{transform:`scale(${scaleTo})`}}>
            <div className="photo-wrapper">
                <div className="shape-background"></div> 
                <div className="shape-border"></div>
                <img 
                    src={profilePic} 
                    alt="Perfil de Samuel" 
                    className="profile-photo"
                />
                {/* Ejemplo: etiqueta extra como “Disponible” 
                <div className="badge-freelance">Available for Freelance</div>*/}
                {/* Ejemplo de iconos decorativos (opcional) 
                <div className="icon-deco icon-1">📈</div>
                <div className="icon-deco icon-2">👁️</div>*/}
            </div>
        </div> 
    );
};

export default ProfilePic;