import React, { Component } from 'react';

import Home from './Home';
import Cardio from './Cardio';
import Weights from './Weights';
import Pilates from './Pilates';
import Programs from './Programs';
import HomeWorkouts from './HomeWorkouts';
import Tracker from './Tracker';
import Login from './Login';
import Register from './Register';

import ReactBootstrap, { Navbar, NavItem, NavDropdown, MenuItem, Nav, NavLink } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends Component {

    render() {
        return (
            <Router>
                <div>
            <Navbar className>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Lard Lad Fitness Tracker</a>
                
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem> <Link to="/">Home </Link> </NavItem>
                        <Route exact path="/" component={Home} />
                    <NavItem> <Link to="/Tracker"> Tracker</Link> </NavItem>
                        <Route path="/Tracker" component={Tracker} />
                    <NavDropdown title="Programs" id="basic-nav-dropdown">

                        <li> <Link to ="/Cardio">Cardio </Link></li>
                        <li> <Link to ="/Weights" >Weights</Link></li>
                        <li> <Link to ="/Pilates">Pilates</Link></li>
                        <li> <Link to ="/Home-Workouts">Home Workouts</Link></li>
                        <li> <divider /></li>
                        <li> <Link to ="/Programs">All Programs</Link></li>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <NavItem> <Link to="/Login">Login </Link> </NavItem>
                    <NavItem> <Link to="/Register">Register </Link> </NavItem>
                </Nav>
                <Route path="/Cardio" component={Cardio} />
                <Route path="/Weights" component={Weights} />
                <Route path="/Pilates" component={Pilates} />
                <Route path="/Programs" component={Programs} />
                <Route path="/Home-Workouts" component={HomeWorkouts} />
                <Route path="/Login" component={Login} />
                <Route path="/Register" component={Register} />


            </Navbar>
          
          
            </div>
            </Router>

        );
    }

}
export default NavBar;