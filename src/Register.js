import React, { Component } from "react";
import axios from 'axios';
// import {Field} from 'formik';

class Register extends Component {

  constructor() {
    super();
    this.state = {
      userName: null,
      password: null,
      proficiency: null,
      programID: null
    };
    this.handleChange = this.handleChange.bind(this)
  }



  registerAccount = () =>
    axios.post('http://localhost:8080/fitnessapp/api/fitness/createAccount', {
      userName: this.state.userName,
      password: this.state.passWord,
      proficiency: this.state.proficiency
    })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  handleChange = (e) => {
    this.setState({
      userName: null,
      password: null,
      proficiency: null,
      programID: null
    })
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }


  render() {
    return (
      <div className="register">
        <form onSubmit={this.handleSubmit}>
          <h2>Register</h2>
          <p>Username: </p>
          <input id="text" type="text" onChange={(this.handleInput)}></input>
          <p>Password: </p>
          <input id="text" type="password" onChange={(this.handleInput)}></input><br /><br />
          <input type="button" onClick={this.retrieveData} value="Sign Up"></input>
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