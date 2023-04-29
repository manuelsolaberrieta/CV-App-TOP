import React from "react";
class GeneralInformation extends React.Component {
  render() {
    return (
      <section>
        <input
          type="text"
          name="name"
          autoComplete="given-name"
          onChange={this.props.setValue}
        />
        <input
          type="text"
          name="lastName"
          autoComplete="family-name"
          onChange={this.props.setValue}
        />
        <input
          type="text"
          name="description"
          autoComplete="xyz123"
          onChange={this.props.setValue}
        />
        <input type="email" name="email" onChange={this.props.setValue} />
        <input type="tel" name="phone" onChange={this.props.setValue} />
      </section>
    );
  }
}
export default GeneralInformation;
