import React, { Component } from "react";
import axios from 'axios';

class Programs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      programID: null,
      programName: null,
      day: null,
      exerciseName: null,
      reps: null,
      sets: null,
      program: [],
      programType: null,
      searchProgram: null,
      isLoading: false,
      error: null
    };
  }

  getPrograms = (e) => {
    axios({
      method: "get",
      url: "http://localhost:8081/fitnessapp/api/fitness/getAllPrograms",
    })
  }

  createProgram = (e) => {
    axios({
      method: "post",
      url: "http://localhost:8081/fitnessapp/api/fitness/createProgram",
    })
  }

  updateProgram = (e) => {
    axios({
      method: "put",
      url: "http://localhost:8081/fitnessapp/api/fitness/updateProgram",
      data: {
        programName: this.state.programName,
        exerciseName: this.state.exerciseName,
        reps: this.state.reps,
        sets: this.state.sets,
        programType: this.state.programType
      }
    })
  }

  deleteProgram = (e) => {
    axios({
      method: "delete",
      url: "http://localhost:8081/fitnessapp/api/fitness/deleteProgram",
    })
  }


  handleProgramSearch = (e) => {
    this.setState({ program: e.target.value })
    console.log(this.state)
  }

  handleInputProgram (e) {
    this.setState({
      programName: e.target.value,
      programType: e.target.value
    })
  }
  componentDidMount() {
    axios({
      method: "get",
      url: "http://localhost:8081/fitnessapp/api/fitness/getAllPrograms",
      responseType: "json"
    }).then(response => {
      console.log(response);
      this.setState({ program: response.data });
    })
  }
  // axios.get('http://localhost:8081/fitnessapp/api/fitness/getAllPrograms').then(response => {
  //   let temp = response.data;
  //   for (let i = 0; i < temp.length; i++) {
  //     if ((temp[i].programName === this.state.searchProgram) || (this.state.programType === temp[i].programType)) {
  //       // this.setState = program[i];
  //       console.log("Program has been found");
  //     }
  //     else {
  //       console.log("Program does not exist");
  //     }
  //   }
  // }).then(function (response) {
  //   console.log(response.data);
  // })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // getProgramByType = () =>
  //   axios({
  //     method: 'get',
  //     url: 'http://localhost:8081/fitnessapp/api/getProgramsByType/' + this.state.programType,
  //     responseType: 'json'
  //   }).then(response => {
  //     this.setState({ program: response.data });
  //   }).catch(function (error) {
  //     console.log(error);
  //   })

  // getProgramByName = () =>
  //   axios({
  //     method: 'get',
  //     url: 'http://localhost:8081/fitnessapp/api/getProgramsByName/' + this.state.programName,
  //     responseType: 'json'
  //   }).then(response => {
  //     this.setState({ Programs: response.data });
  //   }).catch(function (error) {
  //     console.log(error);
  //   })

  render() {
    // const Programs = this.state.program.map((prog, index) => (
    //   <tr key={index}>
    //     <td>{prog.programName}</td>
    //     <td>{prog.day}</td>
    //     <td>{prog.programType}</td>
    //     <td>{prog.exerciseName}</td>
    //     <td>{prog.reps}</td>
    //     <td>{prog.sets}</td>
    //   </tr>

    // ))
    return (
      <div className="all-programs">
        {/* 
        <div className="Program_info">
          <h1>All Programs</h1>
          <table className="table ProgramTable">
            <thead>
              <tr>
                <th>Program Name</th>
                <th>Day</th>
                <th>Type</th>
                <th>Exercise</th>
                <th>Repetitions</th>
                <th>Sets</th>
              </tr>
            </thead>
            <tbody>
              {Programs}
            </tbody>
          </table>
        </div> */}
        <form>
          <div className="input-field">
            <input type="text" className="form-control" placeholder="Search programs here" id="programSearch" onChange={this.handleProgramSearch} />
            <input type="button" onClick={this.searchPrograms} value="Search"></input>

          </div>
        </form>

        <form>
          <p>Fill out the form and click submit to create a program </p>
          <input type="text" placeholder="Program Type" value={this.state.programType} onChange={(this.handleInputProgram)}></input>
          <br></br>
          <input type="text" placeholder="Program Name" value={this.state.programName} onChange={(this.handleInputProgram)}></input>
          <br></br>
          <input type="text" placeholder="Exercise Name" value={this.state.exerciseName} onChange={(this.handleInputProgram)}></input>
          <br></br>
          <input type="text" placeholder="day" value={this.state.day} onChange={(this.handleInputProgram)}></input>
          <br></br>
          <input type="text" placeholder="reps" value={this.state.reps} onChange={(this.handleInputProgram)}></input>
          <br></br>
          <input type="text" placeholder="sets" value={this.state.sets} onChange={(this.handleInputProgram)}></input>
          <br></br>
          <input type="button" value="Submit" onClick={this.addDBEntry}></input>
        </form>
      </div>
    );
  }
}

export default Programs;