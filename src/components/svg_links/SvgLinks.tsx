import React from 'react';
import Envelope from '../../assets/svgs/Envelope';
import LinkedIn from '../../assets/svgs/LinkedIn';
import Instagram from '../../assets/svgs/Instagram';
import Github from '../../assets/svgs/Github';
import CV from '../../assets/svgs/CV';
import { useNavigate } from 'react-router-dom';

const SvgLinks: React.FC = () => {
    const height = 18;
    const width = 18;
    const color = 'rgb(45,45,45)';
    const navigate = useNavigate();
    return (
        <div className="links">
            <a
                className="link"
                href="https://linkedin.com/in/samueldarioballesteros"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedIn height={height} width={width} color={color} />
            </a>
            <a className="link" onClick={() => navigate('/cv')}>
                    <CV height={20} width={20} color={color} />
            </a>
            <a
                className="link"
                href="https://instagram.com/samueldar.io"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Instagram height={height} width={width} color={color} />
            </a>
            <a
                className="link"
                href="https://github.com/sssamuelll"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Github height={height} width={width} color={color} />
            </a>
            <a
                className="link"
                href="mailto:correo@samueldar.io"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Envelope height={height} width={width} color={color} />
            </a>
        </div>
    );
};

export default SvgLinks;
