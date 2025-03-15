import React, { useContext, useState } from 'react'
import ToggleSwitch from '../elements/ToggleSwitch'
import LinkButton from '../elements/LinkButton'
import { Link, NavLink } from 'react-router-dom'
import { DarkModeContext } from '../../contexts/DarkModeContext'

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false) // State to toggle menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState) // Toggle menu state
  }

  return (
    <header id="header">
      <div className="container">

        <Link to="/" className="logotype">
          <img src={ darkMode ? '/images/logotype_dark.svg' : '/images/logotype_light.svg' } alt="Silicon Inc." />
        </Link>

        <nav className={isMenuOpen ? 'open' : ''}> {/* Add 'open' class based on the menu state */}
          <NavLink to="/features" className="nav-link">Features</NavLink>
          <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
        </nav>
        
        <ToggleSwitch id="theme-switch" text="Dark Mode" currentState={darkMode} currentStateCallback={toggleDarkMode} />
        
        <LinkButton to="signin" text="sign in" color="purple" icon="bi bi-person" />

        {/* Hamburger icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="bi bi-list"></i> {/* Add an icon for the hamburger */}
        </div>

      </div>
    </header>
  )
}

export default Header
