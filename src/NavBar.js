import React, { Component } from 'react';

import Home from './Home';
import Cardio from './Cardio';
import Weights from './Weights';
import Other from './Other';
import Programs from './Programs';
import HomeWorkouts from './HomeWorkouts';
import Tracker from './Tracker';
import Login from './Login';
import Register from './Register';
import * as N from 'react-bootstrap';

import { BrowserRouter as Router, Route } from "react-router-dom";

class NavBar extends Component {

    handleSelect = (eventKey) => {
    };

    render() {
        return (
            <Router>
                <div className="NavigationBar">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
                    <N.Navbar inverse collapseOnSelect>
                        <N.Navbar.Header>
                            <N.Navbar.Toggle />
                        </N.Navbar.Header>
                        <N.Navbar.Collapse>
                            <N.Nav>
                                <N.NavItem eventKey={1} title="Home" href="/">Home</N.NavItem>
                                <N.NavItem eventKey={2} title="Tracker" href="/Tracker">Tracker</N.NavItem>
                                <N.NavDropdown eventKey={3} title="Programs" id="basic-nav-dropdown">
                                    <N.MenuItem eventKey={3.1} href="/Cardio">Cardio</N.MenuItem>
                                    <N.MenuItem eventKey={3.2} href="/Weights">Weights</N.MenuItem>
                                    <N.MenuItem eventKey={3.3} href="/Home-Workouts">Home Workouts</N.MenuItem>
                                    <N.MenuItem eventKey={3.4} href="/Other">Other</N.MenuItem>
                                </N.NavDropdown>
                            </N.Nav>
                            <N.Nav pullRight>
                                <N.NavItem eventKey={4} title="Program Manager" href="/Manage-Programs">Manage Programs</N.NavItem>
                                <N.NavItem eventKey={5} title="Login" href="/Login">Login</N.NavItem>
                                <N.NavItem eventKey={6} title="Register" href="/Register">Register</N.NavItem>
                            </N.Nav>
                        </N.Navbar.Collapse>
                    </N.Navbar>
                    <Route exact path="/" component={Home} />
                    <Route path="/Tracker" component={Tracker} />
                    <Route path="/Cardio" component={Cardio} />
                    <Route path="/Weights" component={Weights} />
                    <Route path="/Other" component={Other} />
                    <Route path="/Home-Workouts" component={HomeWorkouts} />
                    <Route path="/Manage-Programs" component={Programs} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Register" component={Register} />

                </div>
            </Router>
        );
    }

}
export default NavBar;