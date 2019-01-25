import React, { Component } from "react";

class Programs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      programs: [],
      isLoading: false,
      error: null
    };
    this.handleChange = this.handleChange.bind(this)
    //this.handleSubmit = this.handleSubmit.bind(this)
  }
  getAllPrograms = () => {
    var searchURL = "localhost:8080/fitnessapp/api/fitness/getAllPrograms"
    axios.get(searchURL).then(response => response.json()).then(data => { this.setState({ account }) })
  }

  render() {
    return (
      <div>
        <h2>All Programs</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>

        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>
    );
  }
}

export default Programs;