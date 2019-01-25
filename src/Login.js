import React, { Component } from "react";
import axios from 'axios'; 
class Login extends Component {
  
  constructor() {
    super(props);
    this.state = {
      userName: null,
      password: null,
      account: null,
      loggedIn:false
    }
  }
  
  
  getAllAccounts= () => {
    var searchURL = "localhost:8080/fitnessapp/api/fitness/getAllUsers"
    axios.get(searchURL).then(response => response.json()).then(data => {this.setState({account})})
  }

  handleChange(e) {
    this.setState({ loggedIn: e.target.value });
  }

  
  render() {
    
    return (
      <div>
        <h2>Login</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
 
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>
    );
  }
}
 
export default Login;