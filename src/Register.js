import React, { Component } from "react";
 
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

updateDetails(userNameInput, firstNameInput, lastNameInput, passwordInput) {
  this.setState({
    userName:userNameInput,
    firstName:firstNameInput,
    lastName:lastNameInput,
    password:passwordInput
  });
}
  getAccountDetails() {
    axios.get()
  }
  registerAccount() {
    axios.post('/user', {
      firstName: firstName
    })
  }
  render() {
    return (
      <div>
        <h2>Register</h2>
       <form>
         <input
         type = "gfg"
         onChange={(event) => {this.updateDetails(event.target.value)}}
         value={this.state.userName}
 
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>
    );
  }
}
 
export default Register;