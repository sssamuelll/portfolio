import React from 'react';
import Envelope from '../../assets/svgs/Envelope';
import LinkedIn from '../../assets/svgs/LinkedIn';
import Instagram from '../../assets/svgs/Instagram';
import Github from '../../assets/svgs/Github';

const SvgLinks: React.FC = () => {
    const height = 30;
    const width = 30;
    const color = 'rgb(45,45,45)';
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
