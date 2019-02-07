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

  // handleUsernameChange = (e) => {
  //   this.setState({ userName: e.target.value });
  //   console.log(this.state);
  // }

  // handlePasswordChange = (e) => {
  //   this.setState({ password: e.target.value });
  //   console.log(this.state);
  // }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value

    });
    console.log(this.state)
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.accountLogin();
  // }
  handleSubmit = () => {
    let loggedIn = false
    axios({
      method: "get",
      url: "http://localhost:8081/fitnessapp/api/fitness/getAllUsers",
    })
      .then(response => {
        let userAccounts = response.data;
        for (let i = 0; i < userAccounts.length; i++) {
          if ((this.state.userName === userAccounts[i].userName) && (this.state.password === userAccounts[i].password)) {
            sessionStorage.setItem("Account", JSON.stringify(userAccounts[i]));
            // let currentUser: userAccounts[i],
            loggedIn = true;
            alert("Account successfully logged in.");
            console.log("Account log in successfull");
            // console.log("Currently logged in as: ", this.state.currentUser.userName);
            this.props.history.push("/");
          }
        }
        if (loggedIn === false) {
          alert("Details entered are invalid. Please try again or register a new account.");
          console.log("Login unsuccessful");
        }
      }).catch(function (error) {
        console.log(error);
      });
  }

  accountLogin = () =>
    axios.get('http://localhost:8081/fitnessapp/api/fitness/getAllUsers').then(response => {
      let userAccounts = response.data;
      for (let i = 0; i < userAccounts.length; i++) {
        if (userAccounts[i].userName && this.state.userName === this.state.password && userAccounts[i].passWord) {
          sessionStorage.setItem("loggedUser", response.data[0])
          this.setState({
            currentUser: userAccounts[i],
            loggedIn: true
          });
          console.log("Account log in successfull");
          console.log("Currently logged in as: ", this.state.currentUser.userName);
        } else {
          console.log("Login unsuccessful");
        }
      }
    })
      .catch(function (error) {
        console.log(error);
      });



  render() {
    return (
      <div className="login">
        <h2>Login </h2>
        {/* <form onSubmit={this.handleSubmit}>
          <input id="username" placeholder = "Username" type="text" username={this.state.userName} onChange={this.handleUsernameChange}></input>
          <p></p>
          <input id="password" placeholder = "Password" type="password" password={this.state.password} onChange={(this.handlePasswordChange)}></input><br /><br />
          <input type="button" password={this.state.value} onClick={this.handleSubmit} value="Sign In"></input>

        </form> */}

        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="username" bsSize="lg">
              <ControlLabel>Username</ControlLabel>
              <FormControl
                autoFocus
                type="username"
                name="userName"
                value={this.state.userName}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="lg">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
              
             /* onClick={this.handleSubmit}*/

            >
              Login
          </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;