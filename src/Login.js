import React, { Component } from "react";
import axios from 'axios'; 
class Login extends Component {
  
 constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (
      <div>
                <p>Username: </p>
                <input id="text" type="text" onChange={(this.handleInput)}></input>
                <p>Password: </p>
                <input id="text" type="password" onChange={(this.handleInput)}></input><br/><br/>
                <input type="button" onClick={this.retrieveData} value="Sign In"></input>
      </div>
    );
  }
}
const style = {
 margin: 15,
};

 
export default Login;