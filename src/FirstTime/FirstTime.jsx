
import React from 'react';
import CountrySelect from "../countries";
import './styles.scss';


class FirstTime extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <div>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">First Time setup</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <CountrySelect />
        <button  type="button" className='btn btn-primary' >OK</button>
      </div>
    </div>;
  }
}

export default FirstTime;