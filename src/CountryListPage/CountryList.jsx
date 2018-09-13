import React, { Component } from "react";

class CountryList extends Component {
  render() {
    return (
      <div
        className="country"
        onClick={() => this.props.select(this.props.index)}
      >
        <h4>
          {this.props.flag} {this.props.country}
        </h4>
      </div>
    );
  }
}

export default CountryList;
