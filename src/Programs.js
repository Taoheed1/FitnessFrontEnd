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
        if ((temp[i].programName === this.state.searchProgram) || (this.state.programType === temp[i].programType)) {
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
    // const { programName, programType, exerciseName, reps, sets } = this.props;
    // const programList = program.map(program => {
    //   return(
    //     <div className="program">
    //       <div>Program Name:{program.programName}</div>
    //       <div>Program Type:{program.programType}</div>
    //       <div>Exercise Name:{program.exerciseName}</div>
    //       <div>Repetitions:{program.reps}</div>
    //       <div>Sets:{program.sets}</div>
    //     </div>
    //   )
    // })
    return (
      <div className="program-list">
        {/* {program-list} */}
        <h2>All Programs</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
                <div>
                      <form>

                  <div class="input-field">

                    <input type="text" class="form-control" placeholder="Search programs here" id="programSearch" />

                  </div>
                </form>
                </div>


        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>
    );
  }
}
 
export default Programs;