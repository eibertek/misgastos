import React, { Fragment } from 'react';
import { getData } from '../../service';

class CountrySelect extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          countries: [],
          currencies:[{name:'Select one Country'}],
      };
  }

  onChangeOption = (evt) => {
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
       return this.state.currencies.map((currency, index) => <option key={index} value={index}>{currency.name}</option>)
  }

  render() {
    return <Fragment>
        <div className="ComponentSeparated">
            <select className='countries' onChange={this.onChangeOption}>
                {this.renderCountries()}
            </select>
        </div>
        <div  className="ComponentSeparated">
            <select className='currencies' onChange={this.onChangeOption}>
                {this.renderCurrencies()}
            </select>
        </div>
    </Fragment>
  }
}

export default CountrySelect;