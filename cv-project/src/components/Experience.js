import React from "react";
class Experience extends React.Component {
  render() {
    return (
      <section>
        <input
          type="text"
          name="workPlace"
          onChange={this.props.setValue}
          placeholder="company"
        />
        <input
          type="text"
          name="workPosition"
          onChange={this.props.setValue}
          placeholder="position"
        />
        <input
          type="text"
          name="workDescription"
          onChange={this.props.setValue}
          placeholder="work description"
        />
        <input
          type="text"
          name="workFromDate"
          onChange={this.props.setValue}
          placeholder="work start date"
        />
        <input
          type="text"
          name="workToDate"
          onChange={this.props.setValue}
          placeholder="work end date"
        />
        <button type="button" className="delete-button">
          Delete
        </button>
      </section>
    );
  }
}
export default Experience;
