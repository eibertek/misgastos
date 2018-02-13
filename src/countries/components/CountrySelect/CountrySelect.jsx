import React, { Fragment } from 'react';
import { getData } from '../../service';

class CountrySelect extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          countries: [],
          currencies:[{name:'Select one Country'}],
          defaultCountry: null,
          defaultCurrency: null,
      };
  }

  onChangeCountry = (evt) => {
    const countryData = this.state.countries[evt.target.value];
    this.setState({
      defaultCountry: countryData,
      defaultCurrency: countryData.currencies[0],
      currencies: countryData.currencies});
    this.saveData(countryData, countryData.currencies[0]);
 }

  onChangeCurrency = (evt) => {
    this.setState({
      defaultCurrency: this.state.currencies[evt.target.value]});
    this.saveData(this.state.defaultCountry, this.state.currencies[evt.target.value]);
  }

  componentDidMount() {
    getData().then((data)=>{
        this.setState({ countries: data, });
    });
  }

  saveData = (country, currency) => {
    this.props.saveData({
      country,
      currency
    });
  }

  renderCountries() {
     return this.state.countries.map((country, index) => <option key={index} value={index}>{country.name}</option>)
  }

  renderCurrencies() {
     return this.state.currencies.map((currency, index) => <option key={index} value={index}>{currency.name}</option>)
  }

  render() {
    return <Fragment>
        <div className="ComponentSeparated">
            <select className='countries' onChange={this.onChangeCountry}>
                {this.renderCountries()}
            </select>
        </div>
        <div  className="ComponentSeparated">
            <select className='currencies' onChange={this.onChangeCurrency}>
                {this.renderCurrencies()}
            </select>
        </div>
    </Fragment>;
  }
}

export default CountrySelect;