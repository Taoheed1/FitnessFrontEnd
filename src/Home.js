import React, { Component } from "react";
import axios from 'axios';

class Home extends Component {
   constructor(props) {
    super(props);
    this.state = {
      programName: null,
      exerciseName: null,
      reps: null,
      sets: null,
      program: [],
      programType: null,
      searchProgram: "",
      isLoading: false,
      error: null
    };
    this.handleProgramSearch = this.handleProgramSearch.bind(this);
    this.searchPrograms = this.searchPrograms.bind(this);
  }
 
  handleProgramSearch = (e) => {
    this.setState({ program: e.target.value })
  }

   searchPrograms() {
      axios({
            method: "get",
            url: "http://localhost:8081/fitnessapp/api/fitness/getProgramsByName/"+ this.state.searchProgram, 
            responseType: "json"
        }).then(response => {
          console.log(response);
            this.setState({ program: response.data });
        })
  }
           
  render() {
    
    return (
      <div>
        <h2>Lard Lad Fitness Tracker</h2>
    
        <p>
        This is the lard lad fitness tracker.
        You can use this to track your workouts and exercises and search the programs that we currently have.
        Hope you have fun exploring the website.
        </p>
         

          {/* <div>
          <form>
            <div className="input-field">
              <input type="text" className="form-control" placeholder="Search programs here" id="programSearch" onChange={this.handleProgramSearch} /> 
              <input type="button" onClick={this.searchPrograms} value="Search"></input>

            </div>
          </form>
        </div>   */}
      </div>
    );
  }
}

export default Home;