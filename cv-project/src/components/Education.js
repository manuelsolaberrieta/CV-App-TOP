import React from "react";
class Education extends React.Component {
  render() {
    return (
      <section>
        <input
          type="text"
          name={"schoolName" + this.props.compNum}
          onChange={this.props.setValue}
          placeholder="school name"
        />
        <input
          type="text"
          name={"studyTitle" + this.props.compNum}
          onChange={this.props.setValue}
          placeholder="title"
        />
        <input
          type="text"
          name={"studyFromDate" + this.props.compNum}
          onChange={this.props.setValue}
          placeholder="study start date"
        />
        <input
          type="text"
          name={"studyToDate" + this.props.compNum}
          onChange={this.props.setValue}
          placeholder="study end date"
        />
      </section>
    );
  }
}
export default Education;
