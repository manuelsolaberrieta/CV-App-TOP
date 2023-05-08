import React from "react";
class ExperiencePreview extends React.Component {
  render() {
    return (
      <div>
        <h5>Company: </h5>
        <span id="work-place">
          {this.props.state["workPlace" + this.props.compNum] !== ""
            ? this.props.state["workPlace" + this.props.compNum]
            : ""}
        </span>
        <h5>Position: </h5>
        <span id="work-title">
          {this.props.state["workPosition" + this.props.compNum] !== ""
            ? this.props.state["workPosition" + this.props.compNum]
            : ""}
        </span>
        <h5>Work Description: </h5>
        <span id="work-description">
          {this.props.state["workDescription" + this.props.compNum] !== ""
            ? this.props.state["workDescription" + this.props.compNum]
            : ""}
        </span>
        <span id="work-from">
          {this.props.state["workFromDate" + this.props.compNum] !== ""
            ? this.props.state["workFromDate" + this.props.compNum]
            : ""}
        </span>
        <span>-</span>
        <span id="work-to">
          {this.props.state["workToDate" + this.props.compNum] !== ""
            ? this.props.state["workToDate" + this.props.compNum]
            : ""}
        </span>
      </div>
    );
  }
}
export default ExperiencePreview;
