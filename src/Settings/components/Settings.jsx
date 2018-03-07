
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CountrySelect from "../../countries";


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

  handleShow = () => {
    this.setState({ show: true });
  }

  persistData = () => {
    this.handleClose();
    this.props.closePopup();
  }

  render() {
    return <div>
      <div className="float-right settingsIcon">
        <div onClick={this.handleShow}><FontAwesomeIcon icon={faCog}/></div>
      </div>
        <Modal open={this.state.show} onClose={this.handleClose}>
          <h5>Settings</h5>
          <hr/>
          <Tabs>
            <TabList>
              <Tab>General</Tab>
              <Tab>Monedas</Tab>
            </TabList>
            <TabPanel>
              Generales
            </TabPanel>
            <TabPanel>
              Moneda por default <br/>
              Crear nueva Moneda <br/>
            </TabPanel>
          </Tabs>
          <button onClick={this.handleClose}>OK</button>
        </Modal>
    </div>;
   }
}


export default Settings;

/*

*/