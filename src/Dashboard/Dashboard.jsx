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
      registries:  this.props.registries.toJS(),
      accounts: mockAccounts(3),
    }
  }

  static propTypes = {
    registries: PropTypes.object,
    tableId: PropTypes.string,
  }

  componentWillReceiveProps = (newProps) => {
    this.setState({registries: newProps.registries.toJS(), tableId: newProps.tableId});
  }

  toggleEdit = tableId => {
    return this.props.toggleEditButtons(tableId);
  }

  editModeEnabled = (tableId) => {
    return this.props.editModes && this.props.editModes[tableId];
  }

  renderStatus = (tableId) => {
    return this.editModeEnabled(tableId) ? 'btn-danger' : 'btn-info';
  }

  render() {
    return <div>
      <h1>Dashboard de finanzas</h1>
      <h5>Pais: {this.props.country.name}</h5>
      <h5>Moneda: {this.props.currency.name} ({this.props.currency.symbol})</h5>
      <div className="RegistriesList">
        <button className={"btn " + this.renderStatus('registries')} onClick={() => this.toggleEdit('registries')}>Editar Registros</button>
        <RegistriesList isTable={true}
                        tableId="registries"
                        rows={this.state.registries}
                        editMode={this.editModeEnabled('registries')}
        />
      </div>
      <div>Agregar Registro:
      <RegistriesComponent canModify={true} dolar={this.props.dolar}/>
      </div>
      <div>
        <button className={"btn " + this.renderStatus('accounts')} onClick={() => this.toggleEdit('accounts')}>Editar Cuentas</button>
        <AccountsList isTable={true}
                      tableId="accounts"
                      rows={this.state.accounts}
                      defaultCurrency={this.props.currency.symbol}
                      editMode={this.editModeEnabled('accounts')}
        /> </div>
      <div>Nueva cuenta </div>
    </div>;
  }
}

export default Dashboard;