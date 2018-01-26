import React, { Fragment } from 'react';
import { getData } from '../service';

class CountrySelect extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          countries: [],
          currencies:[],
      };
      //this.onChangeOption = this.onChangeOption.bind(this);
  }

  onChangeOption = (evt) => {
      //console.log(this.state.countries[evt.target.value]);
      const countryData = this.state.countries[evt.target.value];
      this.setState({currencies: countryData.currencies});
      return 'AR';
  }

  componentDidMount() {
      getData().then((data)=>{
          this.setState({ countries: data, });
      });
  }

  renderCountries() {
       return this.state.countries.map((country, index) => <option key={index} value={index}>{country.name}</option>)
  }

  renderCurrencies() {
       return this.state.currencies.map((country, index) => <option key={index} value={index}>{country.name}</option>)
  }

  render() {
    return <Fragment>
        <select onChange={this.onChangeOption}>
            {this.renderCountries()}
        </select>
      <select onChange={this.onChangeOption}>
          {this.renderCurrencies()}
      </select>
        <button>OK</button>
      </Fragment>
  }
}

export default CountrySelect;