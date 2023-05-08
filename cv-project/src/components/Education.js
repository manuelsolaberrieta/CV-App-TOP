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
        <button
          type="button"
          className="delete-button"
          count="eduCount"
          name={this.props.compNum}
          onClick={this.props.deleteComp}
        >
          Delete
        </button>
      </section>
    );
  }
}
export default Education;
