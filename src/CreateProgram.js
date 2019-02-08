import React, { Component } from "react";
import axios from 'axios';

class CreateProgram extends Component {

    constructor() {
        super();
        this.state = {
            programName: "The Journey",
            day: 1,
            exerciseName: "Squats",
            reps: 5,
            sets: 5,
            programType: "Weights",
            createProgram: false
        }
    }

    handleChange = (e) => {
        this.setState = ({
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
                day: this.state.day,
                exerciseName: this.state.exerciseName,
                reps: this.state.reps,
                sets: this.state.sets,
                programType: this.state.programType
            }
        });
        //    this.props.history.push('/');
     
    }

    render() {
        return (

            <div>
                <div className='createProgram'>
                    <h2>Create a Program by filling in the details</h2>
                    <form onSubmit={this.handleSubmit} className='createProgramForm'>
                        <input type='text' placeholder='Program name' onChange={this.handleChange} />
                        <input type='text' placeholder='Program day' onChange={this.handleChange} />
                        <input type='text' placeholder='Exercise name' onChange={this.handleChange} />
                        <input type='text' placeholder='Reps' onChange={this.handleChange} />
                        <input type='text' placeholder='Sets' onChange={this.handleChange} />
                        <input type='text' placeholder='Program type' onChange={this.handleChange} />
                        <button type='submit' className='newProgramButton' >Submit Program </button>

                    </form>
                </div>

            </div>
        );
    }

}
export default CreateProgram;