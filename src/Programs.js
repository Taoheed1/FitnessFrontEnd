import React, { Component } from "react";
import axios from 'axios';
class Programs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      programName: null,
      exerciseName: null,
      reps: null,
      sets: null,
      program: null,
      programType: null,
      searchProgram: null,
      isLoading: false,
      error: null
    };
    this.handleChange = this.handleChange.bind(this)
    //this.handleSubmit = this.handleSubmit.bind(this)
  }
  // getAllPrograms = () => {
  //   var searchURL = "localhost:8080/fitnessapp/api/fitness/getAllPrograms"
  //   axios.get(searchURL).then(response => response.json()).then(data => { this.setState({ account }) })
  // }
  getAllPrograms = () =>
    axios.get('http://localhost:8080/fitnessapp/api/fitness/getAllUsers' + this.state.programType).then(response => {
      let temp = response.data;
      for (let i = 0; i < temp.length; i++) {
        if (this.state.programName || this.state.programType == this.state.searchProgram) {
          // this.setState = program[i];
          console.log("Program has been found");
        }
        else {
          console.log("Program does not exist");
        }
      }
    }).then(function (response) {
      console.log(response.data);
    })
      .catch(function (error) {
        console.log(error);
      });

  render() {
    const { programName, programType, program, searchProgram } = this.props;
    return (
      <div className="programs">
        <h2>All Programs</h2>
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
 
export default Programs;