import React, { Component } from "react";
import axios from 'axios';

class UpdateProgram extends Component {

    constructor() {
        super();
        this.state = {
            programID: null,
            programName: "",
            day: null,
            exerciseName: "",
            reps: null,
            sets: null,
            programType: "",
            createProgram: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "put",
            url: "http://localhost:8081/fitnessapp/api/fitness/updateProgram",
            data: {
                programName: this.state.programName,
                day: this.state.day,
                exerciseName: this.state.exerciseName,
                reps: this.state.reps,
                sets: this.state.sets,
                programType: this.state.programType
            }
        });     
    }

    render() {
        console.log(this.state);
        return (

            <div>
                <div className='createProgram'>
                    <h2>Update a Program by filling in the details</h2>
                    <form onSubmit={this.handleSubmit} className='createProgramForm'>
                        <input type='text' placeholder='Program name' id="programName" onChange={this.handleChange} />
                        <input type='text' placeholder='Program day' id="programDay" onChange={this.handleChange} />
                        <input type='text' placeholder='Exercise name' id="exerciseName" onChange={this.handleChange} />
                        <input type='text' placeholder='Reps' id="reps" onChange={this.handleChange} />
                        <input type='text' placeholder='Sets' id="sets" onChange={this.handleChange} />
                        <input type='text' placeholder='Program type' id="programType" onChange={this.handleChange} />
                        <button type='submit' className='newProgramButton' >Submit Program </button>

                    </form>
                </div>
            </div>
        );
    }
}
export default UpdateProgram;