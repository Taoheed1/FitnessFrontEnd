import React, { Component } from "react";
import axios from 'axios';
import { Form, Label, Input, FormText } from 'reactstrap';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

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
      [e.target.name]: e.target.value
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
    })
      // this.props.history.push('/Login')
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

            <FormGroup controlId="username" bsSize="small">
              <ControlLabel>Username</ControlLabel>
              <FormControl autoFocus type="username" name="userName" value={this.state.userName} onChange={this.handleChange} />
            </FormGroup>

            <FormGroup controlId="password" bsSize="small">
              <ControlLabel>Password</ControlLabel>
              <FormControl name="password" value={this.state.password} onChange={this.handleChange} type="password" />
            </FormGroup>

            <FormGroup>
              <Label for="proficiencySelect">Proficiency</Label>
              <Input type="select" name="select" name="proficiency" value={this.state.proficiency} onChange={this.handleChange}>
                <option>Select</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Professional</option>
              </Input>
            </FormGroup>

            <input type="button" onClick={this.registerAccount} value="Sign Up"></input>

          </form>
        </div>
      );
    
  }
}

export default Register;