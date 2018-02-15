import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { getData } from '../../service';

class CountrySelect extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          countries: [],
          currencies:[{name:'Select one Country'}],
          country: null,
      };
  }

  onChangeCountry = (evt) => {
    const countryData = this.state.countries[evt.target.value];
    this.setState({ currencies: countryData.currencies });
    this.props.saveData({ country: countryData, currency: countryData.currencies[0] });
 }

  onChangeCurrency = (evt) => {
    this.props.saveData({currency: this.state.currencies[evt.target.value]});
  }

  componentDidMount() {
    getData().then((data)=>{
        this.setState({ countries: data });
        this.props.saveData({
          country: data[0],
          currency: data[0].currencies[0],
        });
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

CountrySelect.contextTypes = {
  country: PropTypes.object,
  currency: PropTypes.object
}

export default CountrySelect;