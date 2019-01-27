import React, { Component } from "react";
import axios from 'axios';
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      password: null,
      proficiency: null,
      programID: null,
      currentUser: null,
      loggedIn: false
    }
  }

  accountLogin = () =>
    axios.get('http://localhost:8080/fitnessapp/api/fitness/getAllUsers').then(response => {
      let temp = response.data;
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].userName && this.state.password === this.state.userName && temp[i].passWord) {
          this.setState({
            currentUser: temp[i]
          });
          console.log("Account log in successfull");
          console.log("Currently logged in as: ", this.state.currentUser);
        } else {
          console.log("Login unsuccessful");
        }

      }
    }).then(function (response) {
      console.log(response.data);
    })
      .catch(function (error) {
        console.log(error);
      });

  handleChange = (e) => {
    this.setState({
      userName: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <p>Username: </p>
          <input id="text" type="text" onChange={(this.handleInput)}></input>
          <p>Password: </p>
          <input id="text" type="password" onChange={(this.handleInput)}></input><br /><br />
          <input type="button" onClick={this.retrieveData} value="Sign In"></input>

        </form>
      </div>
    );
  }
}

export default Login;