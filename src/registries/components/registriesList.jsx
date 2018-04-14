import { Component } from 'react';
import PropTypes from 'prop-types';
import Registries from './registries.container';
import './styles.scss';

class RegistriesListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static propTypes = {
    rows: PropTypes.arrayOf(PropTypes.object),
    isTable: PropTypes.bool,
    tableId: PropTypes.string,
    editMode: PropTypes.bool,
  }

  totals = (col) => {
    return this.props.rows.map(row => row[col]).reduce((a,b) => parseFloat(a) + parseFloat(b), 0);
  }

  renderTable(){
    return <div>
      <h2>Registros:</h2>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            {this.props.editMode ? <th>Actions</th>: null}
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>{this.totals('debit')}</td>
            <td>{this.totals('credit')}</td>
            <td></td>
          </tr>
       </tbody>
      </table>
    </div>;
  }

  renderRows = (isRow) => (this.props.rows.map(row =>
  {
    return <Registries
      isRow
      key={row.id}
      {...row}
      editMode={this.props.editMode}
    />
  }));


  render = () => this.props.isTable ?
    this.renderTable() : this.renderRows(false);
}


export default RegistriesListComponent;