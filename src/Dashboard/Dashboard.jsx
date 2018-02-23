import { Component } from 'react';
import PropTypes from 'prop-types';
import RegistriesList from '../registries/components/registriesList.jsx';
import AccountsList from '../accounts/components/accountsList.jsx';
import './styles.scss';
import RegistriesComponent from '../registries/components/registries.container';
import { mockRegistries, mockAccounts } from './mocker';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registries:  mockRegistries(3, this.props.dolar),
      accounts: mockAccounts(3),
    }
  }

  componentWillReceiveProps = (newProps) => {
    this.setState({registries: newProps.registries.toJS()});
  }

  render() {
    return <div>
      <h1>Dashboard de finanzas</h1>
      <h5>Pais: {this.props.country.name}</h5>
      <h5>Moneda: {this.props.currency.name} ({this.props.currency.symbol})</h5>
      <div className="RegistriesList">
        <button>Editar Registros</button>
        <RegistriesList isTable={true} rows={this.state.registries}/>
      </div>
      <div>Agregar Registro:
      <RegistriesComponent canModify={true} dolar={this.props.dolar}/>
      </div>
      <div>
        <AccountsList isTable={true}
                         rows={this.state.accounts}
                         defaultCurrency={this.props.currency.symbol}
        /> </div>
      <div>Nueva cuenta </div>
    </div>;
  }
}

export default Dashboard;