import React from 'react';
import './ProfilePic.css';
import profilePic from './assets/profile_pic.png';

const ProfilePic: React.FC = () => {
    return (
                    <div className="photo-container">
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