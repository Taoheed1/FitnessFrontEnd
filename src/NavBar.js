import React, { Component } from 'react';

import Home from './Home';
import Programs from './Programs';
import Tracker from './Tracker';
import Login from './Login';
import Register from './Register';
import ReactBootstrap, { Navbar, NavItem, NavDropdown, MenuItem, Nav, NavLink } from 'react-bootstrap';

class NavBar extends Component {

    render() {
        return (

            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Lard Lad Fitness Tracker</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <LinkContainer to="home">
                        <NavItem eventKey={1} href="#">Home </NavItem>
                    </LinkContainer>

                    <LinkContainer to="programs">
                        <NavDropdown eventKey={2} title="Programs" id="basic-nav-dropdown">
                    </LinkContainer>

                    <LinkContainer to="cardio">
                            <MenuItem eventKey={2.1}>Cardio</MenuItem>
                    </LinkContainer>

                    <LinkContainer to="weights">
                            <MenuItem eventKey={2.2}>Weights</MenuItem>
                    </LinkContainer>

                    <LinkContainer to="pilates">
                            <MenuItem eventKey={2.3}>Pilates</MenuItem>
                    </LinkContainer>

                    <LinkContainer to "home-workout">
                        <MenuItem eventKey={2.4}>Home Workouts</MenuItem>
                    </LinkContainer>
                        <MenuItem divider />
                        <MenuItem eventKey={2.4}>All Programs</MenuItem>
                    </NavDropdown>

                </Nav>
                <Nav pullRight>
                    <LinkContainer to="login">
                        <NavItem eventKey={3} href="#">Login </NavItem>
                    </LinkContainer>

                    <LinkContainer to="register">
                        <NavItem eventKey={4} href="#">Register </NavItem>
                    </LinkContainer>


                </Nav>
            </Navbar>
        );
    }

}
export default NavBar;