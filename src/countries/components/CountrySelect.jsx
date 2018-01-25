import React, { Fragment } from 'react';

class CountrySelect extends React.Component {

  onChangeOption() {
      return 'AR';
  }

  render() {
    return <Fragment>
        <select onChange={this.onChangeOption}>
          <option value={'ARG'}>ARGENTINA</option>
        </select>
      <select onChange={this.onChangeOption}>
        <option value={'ArPesos'}>Pesos Argentinos ($)</option>
      </select>
        <button>OK</button>
      </Fragment>
  }
}

export default CountrySelect;