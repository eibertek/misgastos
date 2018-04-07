import { Component } from 'react';
import PropTypes from 'prop-types';
import Accounts from './accounts.container';

class AccountsListComponent extends Component {
  static propTypes = {
    rows: PropTypes.arrayOf(PropTypes.object),
    isTable: PropTypes.bool,
    defaultCurrency: PropTypes.string,
    tableId: PropTypes.string,
    editMode: PropTypes.bool,
  }

  totals = () => {
    return this.props.rows.map(row => row.balance).reduce((a,b) => parseFloat(a) + parseFloat(b));
  }

  renderTable(){
    return <div>
      <h2>Cuentas:</h2>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            {this.props.editMode ? <th>Actions</th>: null}
            <th>Name</th>
            <th>Entity</th>
            <th>Description</th>
            <th>balance</th>
            <th>currency</th>
          </tr>
        </thead>
       <tbody>
       {this.renderRows(true)}
        <td></td>
        <td></td>
        <td></td>
        <td>{this.totals()}</td>
        <td></td>        
       </tbody>
      </table>
    </div>;
  }

  renderRows = (isRow) => (this.props.rows.map(row =>
        <Accounts
          isRow
          key={row.id}
          {...row}
          editMode={this.props.editMode}
        />));


  render = () => this.props.isTable ?
    this.renderTable() : this.renderRows(false);
}


export default AccountsListComponent;