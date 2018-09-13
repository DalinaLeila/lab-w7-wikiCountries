import React, { Component } from "react";

class CountryList extends Component {
  render() {
    return (
      <div onClick={() => this.props.select(this.props.index)}>
        <h4>
          {this.props.flag}
          &nbsp;
          {this.props.country}
        </h4>
      </div>
    );
  }
}

export default CountryList;
// &nbsp; means non-breaking space between the items
