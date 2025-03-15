import React from 'react'
import { Link } from 'react-router-dom'

const ContactOption = ({icon, text, uri, linkText, color}) => {
  return (
    <div className={`contact-option contact-option-${color}`}>
        <i className={icon}></i>
        <p>{text}</p>
        <Link to={uri}>{linkText}</Link>
    </div>
  )
}

export default ContactOption