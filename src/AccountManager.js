import React, { Component } from "react";
import axios from 'axios';
import Login from 'Login';
import Register from 'Register';

class AccountManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            currentUser: null,
            loggedIn: false
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    accountLogin = () =>
        axios.get('http://localhost:8081/fitnessapp/api/fitness/getAllUsers').then(response => {
            let userAccounts = response.data;
            for (let i = 0; i < userAccounts.length; i++) {
                if (userAccounts[i].username && this.state.username === this.state.password && userAccounts[i].passWord) {
                    sessionStorage.setItem("loggedUser", response.data[0])
                    this.setState({
                        currentUser: userAccounts[i]
                    });
                    console.log("Account log in successfull");
                    console.log("Currently logged in as: ", this.state.currentUser.username);
                } else {
                    console.log("Login unsuccessful");
                }
            }


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
                    <input type="button" password={this.state.value} onClick={this.handleSubmit} value="Register"></input>
                </form>
            </div>
        );
    }
}

export default AccountManager;