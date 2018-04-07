import { Component } from 'react';
import PropTypes from 'prop-types';
import Currencies from './currencies.container';

class CurrenciesListComponent extends Component {
  static propTypes = {
    rows: PropTypes.arrayOf(PropTypes.object),
    isTable: PropTypes.bool,
    defaultCurrency: PropTypes.string,
    tableId: PropTypes.string,
    editMode: PropTypes.bool,
  }

  renderTable(){
    return <div>
      <h2>Monedas:</h2>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            {this.props.editMode ? <th>Actions</th>: null}
            <th>Name</th>
            <th>Code</th>
            <th>Symbol</th>
            <th>dolar</th>
            <th>default</th>
            <th>dateUpdated</th>
          </tr>
        </thead>
       <tbody>
       {this.renderRows(true)}
       </tbody>
      </table>
    </div>;
  }

  renderRows = (isRow) => (this.props.rows.map(row => {
    const rowData = row.toJS ? row.toJS() : row;
        return <Currencies
          isRow
          key={row.id}
          {...rowData}
          editMode={this.props.editMode}
        />})
    );


  render = () => this.props.isTable ?
    this.renderTable() : this.renderRows(false);
}


export default CurrenciesListComponent;