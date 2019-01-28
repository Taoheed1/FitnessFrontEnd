import React, { Component } from "react";
import axios from 'axios';
// import {Field} from 'formik';

class Register extends Component {

  constructor() {
    super();
    this.state = {
      username: " ",
      password: " ",
      proficiency: " ",
      programID: ""
    };
  }



  registerAccount = () =>
    axios.post('http://localhost:8080/fitnessapp/api/fitness/createAccount', {
      data: {
        username: this.state.username,
        password: this.state.passWord,
        proficiency: this.state.proficiency
      }
    })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
    console.log(this.state);
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
    console.log(this.state);
  }



  handleProficiencyChange = (e) => {
    this.setState({ proficiency: e.target.value });
    console.log(this.state);
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.registerAccount();

  }


  render() {
    return (
      <div className="register">
        <form onSubmit={this.handleSubmit}>
          <h2>Register</h2>
          <p>Username: </p>
          <input id="username" type="text" value={this.state.username} onChange={(this.handleUsernameChange)}></input>
          <p>Password: </p>
          <input id="password" type="text" value={this.state.password} onChange={(this.handlePasswordChange)}></input><br /><br />
          <p>Proficiency: </p>
          <input id="proficiency" type="text" value={this.state.proficiency} onChange={(this.handleProficiencyChange)}></input><br /><br />
          <input type="button" onClick={this.handleSubmit} value="Sign Up"></input>
          
          {/* <Field Component ="select" name="gender">
            <option value="male"> Male</option>
            <option value="female"> Female</option>
            <option value="other"> Eldritch Horror</option>
          </Field> */}

        </form>
      </div>
    );
  }
}

export default Register;