import React, { Component } from "react";
import axios from 'axios';
import CreateProgram from './CreateProgram';
import UpdateProgram from './UpdateProgram';
import DeleteProgram from './DeleteProgram';
import Programs from './Programs';

class ProgramManager extends Component {
    constructor() {
        super();
        this.state = {
            ProgramManagerSelect: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>What would you like to do?</h1>
                <div class="form-group">
                    <label for="Manage Programs">Manage Programs</label>
                    <select multiple="" class="form-control" id="ProgramManagerSelect" onChange={this.handleChange}>
                        <option value="">Select</option>
                        <option value="CreateProgram">Create Program</option>
                        <option value="UpdateProgram">Update Program</option>
                        <option value="DeleteProgram">Delete Program</option>
                        <option value="ViewPrograms">View Programs</option>
                    </select>
                </div>
                {this.state.ProgramManagerSelect === "CreateProgram" ?<CreateProgram /> : 
                this.state.ProgramManagerSelect === "UpdateProgram" ?<UpdateProgram /> : 
                this.state.ProgramManagerSelect === "DeleteProgram" ?<DeleteProgram /> :
                this.state.ProgramManagerSelect === "ViewPrograms" ?<Programs />:""}
                             

            </div>
        )

    }

}
export default ProgramManager