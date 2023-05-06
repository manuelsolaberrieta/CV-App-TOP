import React from "react";
import GeneralInformation from "./General_Information.js";
import Education from "./Education.js";
import Experience from "./Experience.js";
import Preview from "./Preview.js";

class BaseForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    alert("Something was submitted: ");
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    return (
      <div className="general-container">
        <form onSubmit={this.handleSubmit}>
          <h2>General Information</h2>
          <GeneralInformation setValue={this.handleChange} />
          <h2>Education</h2>
          <Education setValue={this.handleChange} />
          <h2>Experience</h2>
          <Experience setValue={this.handleChange} />
          <input type="submit" />
        </form>
        <Preview statePreview={this.state} />
      </div>
    );
  }
}
export default BaseForm;
