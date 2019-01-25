import React, { Component } from "react";
import axios from 'axios';
class Register extends Component {

  constructor() {
    super();
    this.state = {
      userName: null,
      firstName: null,
      lastName: null,
      password: null
    };
  }

  // updateDetails(userNameInput, firstNameInput, lastNameInput, passwordInput) {
  //   this.setState({
  //     userName:userNameInput,
  //     firstName:firstNameInput,
  //     lastName:lastNameInput,
  //     password:passwordInput
  //   });
  // }
  getAccountDetails() {
    axios.get()
  }
  // registerAccount() {
  //   axios.post('/user', {
  //     firstName: firstName
  //   })
  // }
  render() {
    return (
      <div>
        <h2>Register</h2>
        <p>Username: </p>
        <input id="text" type="text" onChange={(this.handleInput)}></input>
        <p>Password: </p>
        <input id="text" type="password" onChange={(this.handleInput)}></input><br /><br />
        <input type="button" onClick={this.retrieveData} value="Sign Up"></input>
      </div>
    );
  }
}

export default Register;