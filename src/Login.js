import React, { Component } from "react";
import axios from 'axios';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      currentUser: null,
      loggedIn: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  validateForm() {
    return this.state.userName.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state)
  }

  resetSession = () => {
    sessionStorage.clear();
    // this.props.history.push("/");
  }

  handleSubmit = () => {
    axios({
      method: "get",
      url: "http://localhost:8081/fitnessapp/api/fitness/getAllUsers",
    })
      .then(response => {
        let userAccounts = response.data;
        for (let i = 0; i < userAccounts.length; i++) {
          if ((this.state.userName === userAccounts[i].userName) && (this.state.password === userAccounts[i].password)) {
            this.setState({
              currentUser: userAccounts,
              loggedIn: true
            });
            alert("Account successfully logged in.");
            console.log("Account log in successfull");
            sessionStorage.setItem("Account", JSON.stringify(userAccounts[i]));
   
            this.props.history.push("/");
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="login">
        <h2>Login </h2>


        <div className="Login">
          <form >
            <FormGroup controlId="username" bsSize="small">
              <ControlLabel>Username</ControlLabel>
              <FormControl autoFocus type="username" name="userName" value={this.state.userName} onChange={this.handleChange} />
            </FormGroup>

            <FormGroup controlId="password" bsSize="small">
              <ControlLabel>Password</ControlLabel>
              <FormControl name="password" value={this.state.password} onChange={this.handleChange} type="password" />
            </FormGroup>
            <Button block bsSize="large" disabled={!this.validateForm()} onClick={this.handleSubmit}>Login</Button>
          </form>
        </div>
        <div className="Logout">
          <button onClick={this.resetSession}>Logout</button>
        </div>
      </div>
    )
  }
}

export default Login;