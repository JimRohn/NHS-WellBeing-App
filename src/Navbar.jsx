import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass

} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  return (
    <>    
        <a className="home-icon" href="/">
            <FontAwesomeIcon icon={faHouse} />
        </a>
        <a className="search-icon" href="/search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </a>
    </>

  )
}

export default Navbar