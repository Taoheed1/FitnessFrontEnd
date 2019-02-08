import React, { Component } from 'react';
import axios from 'axios';

class CreateProgram extends Component {

constructor(){
    super();
    this.state = {
        programName:  "",
        programType: "",
        day: 300,
        exerciseName: "",
        reps:5,
        sets:5

    }
}
    handleChange = (e) => {
        this.setState({
            programName:e.target.value,

        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {

        return (
            <div>
                <div className ="create-program">
                <h2>Create a program</h2>
                <form onSubmit={handleSubmit}> 
                    <input type='text' onChange={this.handleChange}></input>
                    <button>Create Pogram</button>

                </form>


                </div>
            </div>
        )
    }
    

}
export default CreateProgram;