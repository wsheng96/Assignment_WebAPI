import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

import Logo from './1.png';

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <img src= {Logo} id = "Logo" />
            <NavbarBrand href="/" id="NavTitle">
              Game List
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/" to="/" id="HomeBtn">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/saved" id="HomeBtn">
                    Favourite
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login" id="HomeBtn">
                    Login
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
