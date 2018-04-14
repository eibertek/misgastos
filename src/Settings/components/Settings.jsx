
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CountrySelect from 'src/countries';
import '../styles.scss';
import CurrenciesListComponent from "src/currencies/components/currenciesList.jsx";
import CurrencyComponent from "src/currencies/components/currencies.container";


class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      country: null,
      currency:null,
      dolar: 20.36,
      show:false,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
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

  handleShow = () => {
    this.setState({ show: true });
  }
  onSaveCountry = (data) => {
    this.setState({country: data.country});
  }

  saveTosessionStorage = () => {
    const { store } = this.props;
    const storeFormatted = {
      userSetup: store.userSetup,
      registries: store.registries.toJS(),
      accounts: store.accounts.toJS(),
      currencies: store.currencies.toJS(),
    }
    console.log(storeFormatted);
    sessionStorage.setItem('store',
      btoa(
        encodeURIComponent(
          JSON.stringify(storeFormatted)
        )
      )
    );
  }

  persistData = () => {
    this.handleClose();
    this.props.saveCountry({country: this.state.country});
  }

  render() {
    const { currencies } = this.props;
    return <div>
      <div className="float-right settingsIcon">
        <div onClick={this.handleShow}><FontAwesomeIcon icon={faCog}/></div>
      </div>
        <Modal classNames={{modal:'settings'}} little open={this.state.show} onClose={this.handleClose}>
          <h5>Settings</h5>
          <button onClick={this.saveTosessionStorage}>GUARDAR DATOS en la maquina</button>
          <hr/>
          <Tabs className="tabs">
            <TabList>
              <Tab>General</Tab>
              <Tab>Monedas</Tab>
            </TabList>
            <TabPanel>
              Generales
              <CountrySelect saveData={this.onSaveCountry} renderCurrency={false} />
            </TabPanel>
            <TabPanel>
              Moneda por default <br/>
              <div>
                <button
                  className={'btn ' + this.renderStatus('currenciesSettings')}
                  onClick={() => this.toggleEdit('currenciesSettings')}>
                  Editar Monedas
                </button>
                <CurrenciesListComponent
                  editMode={this.editModeEnabled('currenciesSettings')}
                  isTable={true}
                  tableId="currenciesSettings"
                  rows={currencies}
                /> <br/>
             </div>
              <div>Nueva cuenta </div>
              <table>
                <tr>
                <CurrencyComponent canModify={true} />
                </tr>
              </table>
            </TabPanel>
          </Tabs>
          <button onClick={this.persistData}>OK</button>
          <button onClick={this.handleClose}>CANCEL</button>
        </Modal>
    </div>;
   }
}


export default Settings;

/*

*/