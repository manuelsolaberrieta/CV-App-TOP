import React from "react";

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
        {/* luego reemplazar por componente propio para crear más de una sección */}
        <div className="education-section">
          <h2>Education</h2>
          <h3>School: </h3>
          <span id="school-name"></span>
          <h3>Title: </h3>
          <span id="school-title"></span>
          <h3>from: </h3>
          <span id="school-from"></span>
          <h3>to: </h3>
          <span id="school-to"></span>
        </div>
        <div className="experience-section">
          {/* luego reemplazar por componente propio para crear más de una sección */}
          <h2>Experience</h2>
          <h3>Company: </h3>
          <span id="work-place"></span>
          <h3>Position: </h3>
          <span id="work-title"></span>
          <h3>Work Description: </h3>
          <span id="work-description"></span>
          <h3>from: </h3>
          <span id="work-from"></span>
          <h3>to: </h3>
          <span id="work-to"></span>
        </div>
      </div>
    );
  }
}
export default Preview;
