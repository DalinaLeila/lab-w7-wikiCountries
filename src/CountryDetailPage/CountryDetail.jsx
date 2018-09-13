import React, { Component } from "react";

class CountryDetail extends Component {
  render() {
    let borderName = [];
    let fullName = this.props.countries.map(country => {
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
      <div className="countrydetail">
        <h2>
          {this.props.flag} {this.props.cName}
        </h2>

        <table>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{this.props.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{this.props.area}</td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>{mappedBorders}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;
