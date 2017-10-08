import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
//import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

class Header extends Component {

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">READABLE</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#" role="link">
              Create Post
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>React</MenuItem>
              <MenuItem eventKey={3.2}>Redux</MenuItem>
              <MenuItem eventKey={3.2}>Udacity</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
