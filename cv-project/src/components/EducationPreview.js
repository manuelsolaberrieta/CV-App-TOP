import React from "react";
class EducationPreview extends React.Component {
  render() {
    return (
      <div>
        <h5>School: </h5>
        <span id="school-name">
          {this.props.state["schoolName" + this.props.compNum] !== ""
            ? this.props.state["schoolName" + this.props.compNum]
            : ""}
        </span>
        <h5>Title: </h5>
        <span id="school-title">
          {this.props.state["studyTitle" + this.props.compNum] !== ""
            ? this.props.state["studyTitle" + this.props.compNum]
            : ""}
        </span>
        <span id="school-from">
          {this.props.state["studyFromDate" + this.props.compNum] !== ""
            ? this.props.state["studyFromDate" + this.props.compNum]
            : ""}
        </span>
        <span>-</span>
        <span id="school-to">
          {this.props.state["studyToDate" + this.props.compNum] !== ""
            ? this.props.state["studyToDate" + this.props.compNum]
            : ""}
        </span>
      </div>
    );
  }
}
export default EducationPreview;
