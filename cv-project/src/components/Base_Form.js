import React from "react";
import GeneralInformation from "./General_Information.js";
import Education from "./Education.js";
import Experience from "./Experience.js";
import Preview from "./Preview.js";
import ReactToPrint from "react-to-print";

class BaseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "Your Name Here",
      eduCompList: [],
      expCompList: [],
    };
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
  addEduComponent = () => {
    let i = Math.random();
    this.setState({
      eduCompList: [...this.state.eduCompList, { key: i, compNum: i }],
    });
  };
  addExpComponent = () => {
    let i = Math.random();
    this.setState({
      expCompList: [...this.state.expCompList, { key: i, compNum: i }],
    });
  };
  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };
  deleteEduComponent = (event) => {
    let arr = this.state.eduCompList;
    let index;
    arr.forEach((e, i) => {
      if (e.compNum === parseFloat(event.target.name)) {
        index = i;
      }
    });
    arr.splice(index, 1);
    this.setState({ eduCompList: arr });
  };
  deleteExpComponent = (event) => {
    let arr = this.state.expCompList;
    let index;
    arr.forEach((e, i) => {
      if (e.compNum === parseFloat(event.target.name)) {
        index = i;
      }
    });
    arr.splice(index, 1);
    this.setState({ expCompList: arr });
  };
  render() {
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
            count="eduCount"
            onClick={this.addEduComponent}
            className="add-button"
          >
            Add
          </button>
          {this.state.eduCompList.map((e) => {
            return (
              <Education
                key={e.key}
                compNum={e.compNum}
                setValue={this.handleChange}
                deleteComp={this.deleteEduComponent}
              />
            );
          })}
          <h2>Experience</h2>
          <button
            type="button"
            count="expCount"
            onClick={this.addExpComponent}
            className="add-button"
          >
            Add
          </button>
          {this.state.expCompList.map((e) => {
            return (
              <Experience
                key={e.key}
                compNum={e.compNum}
                setValue={this.handleChange}
                deleteComp={this.deleteExpComponent}
              />
            );
          })}

          <ReactToPrint
            trigger={() => {
              return <input type="submit" value="Print" />;
            }}
            content={() => this.componentRef}
          />
        </form>
        <Preview
          ref={(el) => (this.componentRef = el)}
          expCount={this.state.expCompList}
          eduCount={this.state.eduCompList}
          statePreview={this.state}
        />
      </div>
    );
  }
}
export default BaseForm;
