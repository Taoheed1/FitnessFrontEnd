import React, { Component } from "react";
import axios from 'axios';
// import {Field} from 'formik';

class Register extends Component {

  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      proficiency: " ",

    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  registerAccount = () => {
    axios({
      method: "post",
      url: 'http://localhost:8081/fitnessapp/api/fitness/createAccount',
      data: {
        userName: this.state.userName,
        password: this.state.password,
        proficiency: this.state.proficiency
      }
    });
    this.props.history.push('/Login')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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
          <input id="userName" type="text" value={this.state.userName} id="userName" onChange={(this.handleChange)} placeholder="Username" ></input>
          <p>Password: </p>
          <input id="password" type="password" value={this.state.password} id="password" onChange={(this.handleChange)} placeholder="Password"></input><br /><br />
          <div class="form-group">
            <label for="proficiency">Proficiency</label>
            <select multiple="" class="form-control" id="proficiency" value={this.state.proficiency} onChange={this.handleChange}>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Professional</option>
            </select>
          </div>
          <input type="button" onClick={this.registerAccount} value="Sign Up"></input>

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