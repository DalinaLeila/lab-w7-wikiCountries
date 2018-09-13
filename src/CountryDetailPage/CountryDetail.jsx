import React, { Component } from "react";

class CountryDetail extends Component {
  render() {
    let borderName = [];
    this.props.countries.map(country => {
      this.props.borders.map(border => {
        if (country.cca3 === border) {
          borderName.push({ name: country.name.common, id: country.cca3 });
        }
      });
    });
    console.log(borderName);
    let mappedBorders = borderName.map(country => {
      return (
        <li key={country.id} onClick={() => this.props.select(country.id)}>
          {country.name}
        </li>
      );
    });

    return (
      <div className="details">
        <h1>
          {this.props.flag} &nbsp;
          {this.props.cName}
        </h1>
        <hr />
        <h4>Capital: {this.props.capital}</h4>
        <hr />
        <h4>Area: {this.props.area} km2</h4>
        <hr />
        <hr />
        <h4>Borders: {mappedBorders}</h4>
      </div>
    );
  }
}

export default CountryDetail;
