import React, { Component } from "react";
import axios from 'axios';
import CreateProgram from './CreateProgram';
import UpdateProgram from './UpdateProgram';
import DeleteProgram from './DeleteProgram';

class ProgramManager extends Component {
    constructor() {
        super();
        this.state = {
            willCreate: "",
            willUpdate: "",
            willDelete: "",
            optionPicked: false
        }
    }

    handleChange = (e) => {
        this.setState = ({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>What would you like to do?</h1>
                <div class="form-group">
                    <label for="Manage Programs">Manage Programs</label>
                    <select multiple="" class="form-control" id="ProficiencySelect" value={this.state.manageChoice} onChange={this.handleChange}>
                        <option onSelect={this.handleChange}>Create Program</option>
                        <option>Update Program</option>
                        <option>Delete Program</option>
                    </select>
                </div>
                <CreateProgram/>
                <UpdateProgram />
                {/* if(!this.props)
                <CreateProgram willCreate={this.props.willCreate} />
                <UpdateProgram willUpdate={this.props.willUpdate} />
                <DeleteProgram willDelete={this.props.willDelete} /> */}

            </div>
        )

    }

}
export default ProgramManager