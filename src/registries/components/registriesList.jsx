import { Component } from 'react';
import PropTypes from 'prop-types';
import Registries from './registries.jsx';
import './styles.scss';

class RegistriesListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static propTypes = {
    rows: PropTypes.arrayOf(PropTypes.object),
    isTable: PropTypes.bool,
  }

  renderTable(){
    return <div>
      <h2>Registros:</h2>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Date</th>
            <th>Account</th>
            <th>Name</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Dolar</th>
          </tr>
        </thead>
       <tbody>
       {this.renderRows(true)}
       </tbody>
      </table>
    </div>;
  }

  renderRows = (isRow) => (this.props.rows.map(row =>
        <Registries
          isRow
          key={row.id}
          {...row}
        />));


  render = () => this.props.isTable ?
    this.renderTable() : this.renderRows(false);
}


export default RegistriesListComponent;