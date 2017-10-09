import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
//import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

class Header extends Component {

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">READABLE</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
  }
}

export default Header;
