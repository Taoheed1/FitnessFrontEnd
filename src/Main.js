import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import './App.css';
import './bootstrap.css';
import NavBar from './NavBar';
import Home from './Home';
import Programs from './Programs';
import Tracker from './Tracker';
import Login from './Login';
import Register from './Register';

class Main extends Component {
  render() {
    return (
      <div>

      <NavBar />

      </div>
    );
  }
}

export default Main;

{/* <HashRouter>
        <div>
          <h1>Lard Lad Fitness Tracker</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/programs">Programs</NavLink></li>
            <li><NavLink to="/tracker">Tracker</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={"Home"} />
            <Route path="/programs" component={"Programs"} />
            <Route path="/tracker" component={"Tracker"} />


          </div>
        </div>
      </HashRouter> */}