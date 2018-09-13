import React from "react";
import countryInfo from "./countryInfo.json";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

import Navigation from "./Navigation";
import CountryList from "./CountryListPage/CountryList";
import CountryDetail from "./CountryDetailPage/CountryDetail";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      search: "",
      selectedCountry: null
    };
  }
  componentDidMount() {
    this.setState({
      countries: countryInfo
    });
  }
  render() {
    // listFiltered
    let filteredCountries;
    if (this.state.search) {
      const countries = this.state.countries;
      const results = countries.filter(c => {
        return c.name.official.toLowerCase().indexOf(this.state.search) !== -1;
      });
      filteredCountries = results.map((c, i) => {
        return (
          <a className="list-group-item list-group-item-action">
            <CountryList
              index={c.cca3}
              key={i}
              country={c.name.official}
              flag={c.flag}
              select={this._select}
            />
          </a>
        );
      });
    } else {
      filteredCountries = this.state.countries.map((c, i) => {
        // console.log(c.flag);

        return (
          <a className="list-group-item list-group-item-action">
            <CountryList
              index={c.cca3}
              key={i}
              country={c.name.official}
              flag={c.flag}
              select={this._select}
            />
          </a>
        );
      });
    }
    let selectedCountry = "";
    if (this.state.selectedCountry) {
      selectedCountry = (
        <CountryDetail
          cName={this.state.selectedCountry.name.official}
          flag={this.state.selectedCountry.flag}
          capital={this.state.selectedCountry.capital[0]}
          area={this.state.selectedCountry.area}
          borders={this.state.selectedCountry.borders}
          select={this._selectAsBorder}
        />
      );
    }
    return (
      <div>
        <Navigation />
        <React.Fragment>
          <div className="container mt-3">
            <input
              onChange={this._search}
              placeholder="search country"
              type="text"
              className="form-control"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-7 mt-3">
                <h2>List of countries</h2>
                <div className="list-group scroll">{filteredCountries}</div>
              </div>
              <div className="col-5 mt-3">{selectedCountry}</div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }

  _search = e => {
    this.setState({
      search: e.target.value
    });
    // console.log(this.state.search);
  };

  _select = index => {
    // console.log(index);
    let selectedCountry = "";
    selectedCountry = this.state.countries.map(c => {
      if (c.cca3 === index) {
        // console.log(c);
        this.setState({
          selectedCountry: c
        });
      }
      return selectedCountry;
    });
  };

  _selectAsBorder = border => {
    // console.log(border);
    this.state.countries.map(c => {
      if (c.cca3 === border) {
        // console.log(c);
        this.setState({
          selectedCountry: c
        });
      }
    });
  };
}

export default App;
