import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
    <div className="ui menu">
    
    <Link to = '/Accordion' className="item">
        Accordion
    </Link>
    <Link to = '/Search' className="item">
        Wiki Search
    </Link>
    <Link to = '/Translate'  className="item">
        Translate
    </Link>
    <Link to = '/Dropdown'className="item">
        Dropdown
    </Link>
    </div>
    )
}

export default NavBar