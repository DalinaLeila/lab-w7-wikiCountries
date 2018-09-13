import React, { Component } from "react";

class CountryDetail extends Component {
  render() {
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
              <td>
                {this.props.borders.map((border, index) => {
                  return (
                    <li key={index} onClick={() => this.props.select(border)}>
                      {border}
                    </li>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;
