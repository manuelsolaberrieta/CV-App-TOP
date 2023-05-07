import React from "react";
import GeneralInformation from "./General_Information.js";
import Education from "./Education.js";
import Experience from "./Experience.js";
import Preview from "./Preview.js";

class BaseForm extends React.Component {
  constructor() {
    super();
    this.state = { eduCount: 0, expCount: 0 };
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
  addComponent = (event) => {
    this.setState({
      [event.target.getAttribute("count")]:
        this.state[event.target.getAttribute("count")] + 1,
    });
  };
  handleSubmit = (event) => {
    alert("Something was submitted: ");
    event.preventDefault();
  };

  render() {
    const eduCompList = [];
    for (let i = 0; i < this.state.eduCount; i++) {
      eduCompList.push(
        <Education key={i} compNum={i} setValue={this.handleChange} />
      );
    }
    const expCompList = [];
    for (let i = 0; i < this.state.expCount; i++) {
      expCompList.push(
        <Experience key={i} compNum={i} setValue={this.handleChange} />
      );
    }
    return (
      <div className="general-container">
        <form id="base-form" onSubmit={this.handleSubmit}>
          <h2>General Information</h2>
          <GeneralInformation
            setValue={this.handleChange}
            setImage={this.handleImageChange}
          />
          <h2>Education</h2>
          <button
            type="button"
            id="add-education"
            count="eduCount"
            name="neweducation"
            onClick={this.addComponent}
          >
            Add
          </button>
          {eduCompList}
          <h2>Experience</h2>
          <button
            type="button"
            id="add-experience"
            count="expCount"
            name="newexperience"
            onClick={this.addComponent}
          >
            Add
          </button>
          {expCompList}
          <input type="submit" value="send" />
        </form>
        <Preview
          expCount={this.state.expCount}
          eduCount={this.state.eduCount}
          statePreview={this.state}
        />
      </div>
    );
  }
}
export default BaseForm;
