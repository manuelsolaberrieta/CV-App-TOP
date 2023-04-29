import React from "react";
import GeneralInformation from "./General_Information.js";

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
      <form onSubmit={this.handleSubmit}>
        <GeneralInformation setValue={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }
}
export default BaseForm;
