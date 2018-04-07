
import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import CountrySelect from "../countries";
import './styles.scss';


class FirstTime extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      country: null,
      currency:null,
      dolar: 20.36,
    };
  }

  saveData = (data) => {
    this.setState(data);
   };

  changeInput = (evt) => {
    this.setState({ dolar: evt.target.value });
  }

  persistData = () => {
    const { currency }  = this.state;
    currency.id = uuidv4();
    this.props.saveFirstTime({ currency, ...this.state});
    this.props.closePopup();
  }

  render() {
    return <div>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">First Time setup</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <CountrySelect saveData={this.saveData}/>
        <div style={{ paddingLeft: '20px', marginBottom: '10px'  }}>
          Tipo de cambio: <input placeholder="tipo de cambio dolar" defaultValue={this.state.dolar} onChange={this.changeInput} />
        </div>
        <button  type="button"onClick={this.persistData} className='btn btn-primary' >OK</button>
      </div>
    </div>;
  }
}

export default FirstTime;