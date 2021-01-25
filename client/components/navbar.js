import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Nav, NavItem} from 'react-bootstrap'
const Navbar = () => (
  <Nav fill variant="tabs">
    <NavItem>
      <Link
        className="nav-link"
        to="/home"
        style={{fontFamily: 'Montserrat', color: 'black'}}
      >
        What?
      </Link>
    </NavItem>
    <NavItem>
      <Link
        className="nav-link"
        to="/whyIneedAjob"
        style={{fontFamily: 'Montserrat', color: 'black'}}
      >
        Why I need a job
      </Link>
    </NavItem>
    <NavItem>
      <Link
        className="nav-link"
        to="/how"
        style={{fontFamily: 'Montserrat', color: 'black'}}
      >
        My checklist
      </Link>
    </NavItem>
  </Nav>
)

/**
 * CONTAINER
 */

export default Navbar
