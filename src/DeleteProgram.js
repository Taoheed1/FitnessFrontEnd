import React, { Component } from "react";
import axios from 'axios';

class DeleteProgram extends Component {

    constructor() {
        super();
        this.state = {
            programID: null,
            programName: null,
            deleteSuccesful: false,
            userName: null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "get",
            url: "http://localhost:8081/fitnessapp/api/fitness/getProgramsByID/" + this.state.programID,
            responseType: "json"
        }).then(response => {
            console.log(response);
            this.setState({ program: response.data });
            if (this.state.userName !== 'Admin') {
                alert("Program cannot be deleted by current user")
            } else {
                this.handleDelete();
            }
        })
    }

    handleDelete = (e) => {
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