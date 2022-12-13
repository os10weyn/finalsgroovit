import React from 'react'
import '../../css/homepage.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faPowerOff} from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className='header'>
    <h1 className="header-txt">WELCOME, USER</h1>
    <FontAwesomeIcon icon={faPowerOff} className="logout-btn" />
  </div>
  )
}

export default Header