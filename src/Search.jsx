import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.search}
          placeholder="search for country..."
          type="text"
          className="form-control"
        />
      </div>
    );
  }
}

export default Search;
