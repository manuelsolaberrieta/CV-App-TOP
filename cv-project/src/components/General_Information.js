import React from "react";

class GeneralInformation extends React.Component {
  render() {
    return (
      <section>
        <input
          type="text"
          name="firstName"
          autoComplete="given-name"
          onChange={this.props.setValue}
          placeholder="name"
        />
        <input
          type="text"
          name="lastName"
          autoComplete="family-name"
          onChange={this.props.setValue}
          placeholder="last name"
        />
        <textarea
          name="description"
          onChange={this.props.setValue}
          placeholder="description"
        />
        <input
          type="text"
          name="adress"
          onChange={this.props.setValue}
          placeholder="adress"
        />
        <input
          type="email"
          name="email"
          onChange={this.props.setValue}
          placeholder="email"
        />
        <input
          type="tel"
          name="phone"
          onChange={this.props.setValue}
          placeholder="phone"
        />
        <label htmlFor="profilePicture" className="custom-file-upload">
          Upload your profile picture
        </label>
        <input
          id="profilePicture"
          type="file"
          name="profilePicture"
          onChange={this.props.setImage}
          placeholder="photo"
          accept="image/*"
        />
      </section>
    );
  }
}
export default GeneralInformation;
