import React from 'react'
import { Link } from 'react-router-dom'

const LinkChevronButton = ({to, text}) => {
  
    return (
        <Link to={to} className={`btn btn-chevron`}>
            <i className="fa-regular fa-chevron-down"></i>
            {text}
        </Link>
    )
}

export default LinkChevronButton