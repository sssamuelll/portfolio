import React from 'react'
import Envelope from '../../assets/svgs/Envelope'
import LinkedIn from '../../assets/svgs/LinkedIn'
import Instagram from '../../assets/svgs/Instagram'
import Github from '../../assets/svgs/Github'

const SvgLinks: React.FC = () => {
    return (
        <div className="links">
            <a className="link" href="mailto:correo@samueldar.io">
                <Envelope />
            </a>
            <a className="link" href="https://github.com/sssamuelll">
                <Github />
            </a>
            <a className="link" href="https://linkedin.com/in/samueldarioballesteros">
                <LinkedIn />
            </a>
            <a className="link" href="https://instagram.com/samueldar.io">
                <Instagram />
            </a>
        </div>
    )
}

export default SvgLinks