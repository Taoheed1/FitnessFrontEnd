import React, { Component } from "react";
import axios from 'axios';

class DeleteProgram extends Component {

    constructor() {
        super();
        this.state = {
            programID: null,
            programName: null,
            deleteSuccesful: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "delete",
            url: "http://localhost:8081/fitnessapp/api/fitness/deleteProgram/" + this.state.programID,
            data: {
                programName: this.state.programName
            }
        })
            .then(response => {
                this.setState({
                    deleteSuccesful: true
                })
            })
            .catch(function (error) {
                console.log(error);
                alert("Program delete failed");
            });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }

    render() {
        return (
            <div>
                <div className='deleteProgram'>
                    <h2>Delete a Program by typing in the unique ID</h2>
                    <form onSubmit={this.handleSubmit} className='createProgramForm'>
                        <input type='text' placeholder='Program ID' id="programID" onChange={this.handleChange} />
                        <button type='submit' className='newProgramButton' >Delete Program </button>

                    </form>
                    {this.state.deleteSuccesful ?
                        <div>
                            <p> The program has been successfully removed </p>
                        </div>
                        : null}
                </div>



            </div>
        );
    }
}
export default DeleteProgram;