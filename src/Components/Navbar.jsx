import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistState } from './utils/global.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const { themeDispatch } = useDentistState();

  const toggleTheme = () => {
    themeDispatch({ type: 'CHANGE_THEME' })
  }

  return (
    <nav>
        <img className='logo' src="images/logo.png" alt="logo" />
        <img className='logo2' src="images/logo2.png" alt="logo" />
      <div className='nav-container'>
        <div className='nav-bar'>
          <Link to="/home">Home</Link>
          <Link to="/favs">Favs</Link>
          <Link to="/contact">Contact</Link> 
        </div>
        <button className='btn-change-theme' onClick={toggleTheme}>
          <FontAwesomeIcon icon={faCircleHalfStroke} className='icon-change-theme' />
        </button>
      </div>
    </nav>
  )
}

export default Navbar