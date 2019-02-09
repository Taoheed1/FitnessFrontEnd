import React, { Component } from "react";
import axios from 'axios';
class Weights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programName: "",
      userName: "",
      day: null,
      exerciseName: "",
      reps: null,
      sets: null,
      programType: "",
      program: [],
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "http://localhost:8081/fitnessapp/api/fitness/getProgramsByType/Weights",
      responseType: "json"
    }).then(response => {
      console.log(response);
      this.setState({ program: response.data });
    })
  }

  render() {
    const Programs = this.state.program.map((prog, index) => (
      <tr key={index}>
        <td>{prog.userName}</td>
        <td>{prog.programID}</td>
        <td>{prog.programName}</td>
        <td>{prog.day}</td>
        <td>{prog.programType}</td>
        <td>{prog.exerciseName}</td>
        <td>{prog.reps}</td>
        <td>{prog.sets}</td>
      </tr>))
    return (
      <div>
        <div className="all-programs">

          <div className="Program_info">
            <h1>Weights</h1>
            <table className="table ProgramTable">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Program ID</th>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Weights;