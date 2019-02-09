import React, { Component } from "react";
import axios from 'axios';

class CreateProgram extends Component {

    constructor() {
        super();
        this.state = {
            programName: "",
            userName: "",
            day: null,
            exerciseName: "",
            reps: null,
            sets: null,
            programType: "",
            createSuccessful: false
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
            method: "post",
            url: "http://localhost:8081/fitnessapp/api/fitness/createProgram",
            data: {
                programName: this.state.programName,
                userName: JSON.parse(sessionStorage.getItem("Account")).userName,
                day: this.state.day,
                exerciseName: this.state.exerciseName,
                reps: this.state.reps,
                sets: this.state.sets,
                programType: this.state.programType
            }
        })
            .then(response => {
                this.setState({
                    createSuccessful: true
                })
            })
    }

    render() {
        return (
            <div>
                <div className='createProgram'>
                    <h2>Create a Program by filling in the details</h2>
                    <form onSubmit={this.handleSubmit} className='createProgramForm'>
                        <input type='text' placeholder='Program name' id="programName" onChange={this.handleChange} />
                        <input type='text' placeholder='Program day' id="programDay" onChange={this.handleChange} />
                        <input type='text' placeholder='Exercise name' id="exerciseName" onChange={this.handleChange} />
                        <input type='text' placeholder='Reps' id="reps" onChange={this.handleChange} />
                        <input type='text' placeholder='Sets' id="sets" onChange={this.handleChange} />
                        <input type='text' placeholder='Program type' id="programType" onChange={this.handleChange} />
                        <button type='submit' className='newProgramButton' >Submit Program </button>
                    </form>
                    {this.state.createSuccessful ?
                        <div>
                            <p> The program has been successfully created </p>
                        </div>
                        : null}
                </div>
            </div>
        );
    }
}

export default CreateProgram;