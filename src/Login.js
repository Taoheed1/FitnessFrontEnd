import React, { Component } from "react";
import axios from 'axios';
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      currentUser: null,
      loggedIn: false
    }
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
    console.log(this.state);
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
    console.log(this.state);
  }

  accountLogin = () =>
    axios.get('http://localhost:8080/fitnessapp/api/fitness/getAllUsers').then(response => {
      let userAccounts = response.data;
      for (let i = 0; i < userAccounts.length; i++) {
        if (userAccounts[i].username && this.state.password === this.state.username && userAccounts[i].passWord) {
          this.setState({
            currentUser: userAccounts[i]
          });
          console.log("Account log in successfull");
          console.log("Currently logged in as: ", this.state.currentUser.username);
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.accountLogin();
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <p>Username: </p>
          <input id="username" type="text" username={this.state.username} onChange={this.handleUsernameChange}></input>
          <p>Password: </p>
          <input id="password" type="password" password={this.state.password} onChange={(this.handlePasswordChange)}></input><br /><br />
          <input type="button" password={this.state.value} onClick={this.handleSubmit} value="Sign In"></input>

        </form>
      </div>
    );
  }
}

export default Login;