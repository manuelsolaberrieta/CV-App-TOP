import React from "react";
import EducationPreview from "./EducationPreview.js";
import ExperiencePreview from "./ExperiencePreview.js";

class Preview extends React.Component {
  render() {
    return (
      <div className="preview-container">
        <div className="gen-info-header">
          <div className="name-and-lastname">
            <span id="name">
              {this.props.statePreview.name !== ""
                ? this.props.statePreview.name + " "
                : ""}
            </span>
            <span id="lastname">
              {this.props.statePreview.lastName !== ""
                ? this.props.statePreview.lastName
                : ""}
            </span>
          </div>
        </div>
        <div className="gen-info-description">
          <h2>Description</h2>
          <p id="description">
            {this.props.statePreview.description !== ""
              ? this.props.statePreview.description
              : ""}
          </p>
        </div>
        <aside className="gen-info-sidebar">
          <img
            src={
              this.props.statePreview.profilePicture !== ""
                ? this.props.statePreview.profilePicture
                : ""
            }
            alt="profile"
            id="profile-picture"
          />
          <h2>Personal Details</h2>
          <div className="personal-details-container">
            <h3>Adress</h3>
            <span id="adress">
              {this.props.statePreview.adress !== ""
                ? this.props.statePreview.adress
                : ""}
            </span>
            <h3>Phone Number</h3>
            <span id="phone-number">
              {this.props.statePreview.phone !== ""
                ? this.props.statePreview.phone
                : ""}
            </span>
            <h3>Email</h3>
            <span id="email">
              {this.props.statePreview.email !== ""
                ? this.props.statePreview.email
                : ""}
            </span>
          </div>
        </aside>
        <div className="education-section">
          <h2>Education</h2>
          {this.props.eduCount.map((e) => {
            return (
              <EducationPreview
                key={e.key}
                compNum={e.compNum}
                state={this.props.statePreview}
              />
            );
          })}
        </div>
        <div className="experience-section">
          <h2>Experience</h2>
          {this.props.expCount.map((e) => {
            return (
              <ExperiencePreview
                key={e.key}
                compNum={e.compNum}
                state={this.props.statePreview}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Preview;
