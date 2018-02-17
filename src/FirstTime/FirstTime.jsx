
import React from 'react';
import PropTypes from 'prop-types';
import CountrySelect from "../countries";
import './styles.scss';


class FirstTime extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      country: null,
      currency:null,
    };
  }

  saveData = (data) => {
    this.setState(data);
   };

  changeInput = (evt) => {
    this.setState({ dolar: evt.target.value });
  }

  persistData = () => {
    this.props.saveFirstTime(this.state);
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
          Tipo de cambio: <input placeholder="tipo de cambio dolar" defaultValue={20.36} onChange={this.changeInput} />
        </div>
        <button  type="button"onClick={this.persistData} className='btn btn-primary' >OK</button>
      </div>
    </div>;
  }
}

export default FirstTime;