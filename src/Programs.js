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
      program: [],
      programType: null,
      searchProgram: null,
      isLoading: false,
      error: null
    };
  }

  handleProgramSearch = (e) => {
    this.setState({ program: e.target.value })
    console.log(this.state)
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
  //  const { programName, programType, exerciseName, reps, sets } = this.props;
    const Programs = this.state.program.map((prog, index) => (
      <tr key={index}>
        <td>{prog.programName}</td>
        <td>{prog.programType}</td>
        <td>{prog.exerciseName}</td>
        <td>{prog.reps}</td>
        <td>{prog.sets}</td>
      </tr>

    ))
    return (
      <div className="all-programs">

        <div className="Program_info">
          <h1>Programs</h1>
          <table className="table ProgramTable">
            <thead>
              <tr>
                <th>Program</th>
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
        {/*         

        <div>
          <form>

            <div className="input-field">

              <input type="text" className="form-control" placeholder="Search programs here" id="programSearch" onChange={this.handleProgramSearch} />
              <div className="program">
                {(this.state.programs.map((program =>
                  <p>{this.state.program.programName}</p>
                  <p>{this.state.program.programType}</p>
                  <p>{this.state.program.exerciseName}</p>
                  <p>{this.state.program.reps}</p>
                  <p>{this.state.program.sets}</p>
              )))}
              </div>
            </div>
          </form>
        </div> */}
        {/* <Form>
          <Row form>

            <FormGroup>
              <Label for="progName" ></Label>
              <Input type="text" name="progName" id="progName" placeholder="Program" onChange={this.songNameChange} />
            </FormGroup>
            <FormGroup>
              <Label for="exerciseName"></Label>
              <Input type="text" name="exerciseName" id="exerciseName" placeholder="Exercise" onChange={this.artistNameChange} />
            </FormGroup>
            <FormGroup>
              <Label for="reps"></Label>
              <Input type="text" name="reps" id="reps" placeholder="Reps" onChange={this.albumNameChange} />
            </FormGroup>
            <FormGroup>
              <Label for="sets"></Label>
              <Input type="text" name="sets" id="sets" placeholder="Sets" onChange={this.producerNameChange} />
            </FormGroup>
            <FormGroup>
              <Label for="year"></Label>
              <Input type="text" name="year" id="year" placeholder="Year" onChange={this.yearChange} />
            </FormGroup>
            <FormGroup>
              <Label for="userName"></Label>
              <Input type="text" name="userName" id="userName" placeholder="Username" onChange={this.userNameChange} />
            </FormGroup>
          </Row>
        </Form>
        <Button type="button" onClick={this.handleInput}>Submit</Button> */}



      </div>
    );
  }
}

export default Programs;