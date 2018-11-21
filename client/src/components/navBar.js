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
import { withRouter } from 'react-router-dom'

import Logo from './1.png';

class AppNavbar extends Component {
  constructor() {
    super();
  
  this.toggle = this.toggle.bind(this);
  this.logout = this.logout.bind(this);
  this.state = {
    isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  logout(e) {
    e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push(`/`);
  }

  
  render(){
    const loginRegLink = (
      
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink id="navitem" href="/login" to="/login">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="navitem" href="/register" to="/register">
                  Register
                </NavLink>
              </NavItem>
            </Nav>

    )

    const userLink = (
      <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="/home" to="/home" id="HomeBtn">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/gameNews" id="HomeBtn">
          Game News
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/saved" id="HomeBtn">
          Favourite
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href = " " onClick={this.logout} id="HomeBtn">
          LogOut
        </NavLink>
      </NavItem>
    </Nav>

    )

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
              {localStorage.usertoken ? userLink : loginRegLink}
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  };
}

export default withRouter(AppNavbar);
