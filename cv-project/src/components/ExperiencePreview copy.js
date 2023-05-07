import React from "react";
class ExperiencePreview extends React.Component {
  render() {
    return (
      <div>
        <h5>Company: </h5>
        <span id="work-place"></span>
        <h5>Position: </h5>
        <span id="work-title"></span>
        <h5>Work Description: </h5>
        <span id="work-description"></span>
        <span id="work-from"></span>
        <span>-</span>
        <span id="work-to"></span>
      </div>
    );
  }
}
export default ExperiencePreview;
