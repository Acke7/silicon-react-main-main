import React from 'react'
import { Link } from 'react-router-dom'

const LinkDownloadButton = ({to, text, description, icon, image}) => {
    
    return (
        <Link to={to} className="btn btn-download">
            <div className="button-content">
                {icon && <i className={icon}></i>}
                {image && <img src={image} alt={text} />}
                <div className="description">{description}</div>
                <div className="text">{text}</div>
            </div>
        </Link>
    )
}

export default LinkDownloadButton