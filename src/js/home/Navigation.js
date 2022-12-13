import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faSearch, faMusic} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import { useState } from 'react';


function Navigation() {
    const  [active, setActive] = useState(0);
  return (
    <div className="nav-cont">
        <nav className="navbar">
            <a><FontAwesomeIcon icon={faHome} className="home-btn"  /></a>

           <Link to="/search"> <FontAwesomeIcon icon={faSearch} className="search-btn" /> </Link>
            <FontAwesomeIcon icon={faSearch} className="search-btn" />
           <Link to ="/player"><FontAwesomeIcon icon={faMusic} className="music-btn" /> </Link>
        </nav>
    </div>
  )


}

export default Navigation