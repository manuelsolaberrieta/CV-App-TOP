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
  handleImageChange = (event) => {
    if (event.target.files != null) {
      let img = event.target.files[0];
      this.setState({
        profilePicture: URL.createObjectURL(img),
      });
    }
  };
  addComponent = () => {};
  handleSubmit = (event) => {
    alert("Something was submitted: ");
    event.preventDefault();
  };

  render() {
    return (
      <div className="general-container">
        <form onSubmit={this.handleSubmit}>
          <h2>General Information</h2>
          <GeneralInformation
            setValue={this.handleChange}
            setImage={this.handleImageChange}
          />
          <h2>Education</h2>
          <button type="button" id="add-education" onClick={this.addComponent}>
            Add
          </button>
          <div id="education">
            <Education setValue={this.handleChange} />
          </div>
          <h2>Experience</h2>
          <button type="button" id="add-education">
            Add
          </button>
          <div id="experience">
            <Experience setValue={this.handleChange} />
          </div>
          <input type="submit" />
        </form>
        <Preview statePreview={this.state} />
      </div>
    );
  }
}
export default BaseForm;
