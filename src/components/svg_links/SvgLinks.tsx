import React from 'react'
import Envelope from '../../assets/svgs/Envelope'
import LinkedIn from '../../assets/svgs/LinkedIn'
import Instagram from '../../assets/svgs/Instagram'
import Github from '../../assets/svgs/Github'

const SvgLinks: React.FC = () => {
    const height = 20
    const width = 20
    return (
        <div className="links">
            <a className="link" href="mailto:correo@samueldar.io">
                <Envelope height={height} width={width} />
            </a>
            <a className="link" href="https://github.com/sssamuelll">
                <Github height={height} width={width} />
            </a>
            <a className="link" href="https://linkedin.com/in/samueldarioballesteros">
                <LinkedIn height={height} width={width} />
            </a>
            <a className="link" href="https://instagram.com/samueldar.io">
                <Instagram height={height} width={width} />
            </a>
        </div>
    )
}

export default SvgLinks