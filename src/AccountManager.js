import React, { Component } from "react";
import axios from 'axios';
class AccountManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            password: null,
            currentUser: null,
            loggedIn: false
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state);
    }

    accountLogin = () =>
        axios.get('http://localhost:8081/fitnessapp/api/fitness/getAllUsers').then(response => {
            let userAccounts = response.data;
            for (let i = 0; i < userAccounts.length; i++) {
                if (userAccounts[i].userName && this.state.userName === this.state.password && userAccounts[i].password) {
                    sessionStorage.setItem("loggedUser", response.data[0])
                    this.setState({
                        currentUser: userAccounts[i]
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

    handleSubmit = (e) => {
        e.preventDefault();
        this.accountLogin();
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit}>
                    <p>Username: </p>
                    <input id="username" type="text" userName={this.state.username} onChange={this.handleChange}></input>
                    <p>Password: </p>
                    <input id="password" type="password" password={this.state.password} onChange={(this.handleChange)}></input><br /><br />
                    <input type="button" password={this.state.value} onClick={this.handleSubmit} value="Sign In"></input>
                    <input type="button" password={this.state.value} onClick={this.handleSubmit} value="Register"></input>
                </form>
            </div>
        );
    }
}

export default AccountManager;