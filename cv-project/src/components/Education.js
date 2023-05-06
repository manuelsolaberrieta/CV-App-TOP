import React from "react";
class Education extends React.Component {
  render() {
    return (
      <section>
        <input
          type="text"
          name="schoolName"
          onChange={this.props.setValue}
          placeholder="school name"
        />
        <input
          type="text"
          name="studyTitle"
          onChange={this.props.setValue}
          placeholder="title"
        />
        <input
          type="text"
          name="studyFromDate"
          onChange={this.props.setValue}
          placeholder="study start date"
        />
        <input
          type="text"
          name="studyToDate"
          onChange={this.props.setValue}
          placeholder="study end date"
        />
      </section>
    );
  }
}
export default Education;
