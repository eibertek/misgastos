import { Component } from 'react';
import PropTypes from 'prop-types';
import RegistriesList from '../registries/components/registriesList.jsx';
import AccountsList from '../accounts/components/accountsList.jsx';
import 'react-tabs/style/react-tabs.scss';
import './styles.scss';
import RegistriesComponent from '../registries/components/registryForm.container';
import AccountsComponent from '../accounts/components/accounts.container';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registries:  this.props.registries.toJS(),
      accounts: this.props.accounts.toJS(),
    };
  }

  static propTypes = {
    registries: PropTypes.object,
    tableId: PropTypes.string,
  }

  componentWillReceiveProps = (newProps) => {
    this.setState({registries: newProps.registries.toJS(), accounts: newProps.accounts.toJS(), tableId: newProps.tableId});
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
      <div className="float-left">
        <h1>Dashboard de finanzas</h1>
        <h5>Pais: {this.props.country.name}</h5>
        <h5>Moneda: {this.props.currency.get('name')} ({this.props.currency.get('symbol')})</h5>
      </div>
      <div className="clearfix"></div>
      <div>FILTROS</div>
      <div>
      <select><option>Cuentas</option></select>
      <select><option>Monedas</option></select>
      <input placeholder="Fecha Desde"/>
      <input placeholder="Fecha Hasta"/> 
      <input placeholder="Buscar por nombre"/> 
      </div>
      <div className="clearfix"></div>
      <Tabs>
        <TabList>
          <Tab>Registros</Tab>
          <Tab>Cuentas</Tab>
        </TabList>
        <TabPanel>
          <div className="RegistriesList">
            <button className={'btn ' + this.renderStatus('registries')} onClick={() => this.toggleEdit('registries')}>Editar Registros</button>
            <RegistriesList isTable={true}
                            tableId="registries"
                            rows={this.state.registries}
                            editMode={this.editModeEnabled('registries')}
            />
          </div>
          <div>Agregar Registro:
            <RegistriesComponent canModify={true} dolar={this.props.dolar}/>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <button className={'btn ' + this.renderStatus('accounts')} onClick={() => this.toggleEdit('accounts')}>Editar Cuentas</button>
            <AccountsList isTable={true}
                          tableId="accounts"
                          rows={this.state.accounts}
                          defaultCurrency={this.props.currency.get('name')}
                          editMode={this.editModeEnabled('accounts')}
            /> </div>
          <div>Nueva cuenta </div>
          <AccountsComponent canModify={true} />
        </TabPanel>
      </Tabs>
    </div>;
  }
}

export default Dashboard;