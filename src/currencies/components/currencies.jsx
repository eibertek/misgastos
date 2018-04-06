import { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { fromJS } from 'immutable';
import Moment from 'moment';
import RowsComponent from 'src/commons/Rows/RowsComponent.jsx';
import formData from './formData';

class CurrencyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id || uuidv4(),
      name: this.props.name || null,
      code: this.props.code || null,
      symbol: this.props.symbol || null,
      dolar: this.props.dolar || 0.00,
      default: this.props.default || false,
      dateUpdated: this.props.dateUpdated || null,
    };
  }

  static propTypes = {
    canModify: PropTypes.bool,
    isRow: PropTypes.bool,
    render: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
    code: PropTypes.string,
    symbol: PropTypes.string,
    dolar: PropTypes.number,
    default: PropTypes.bool,
    dateUpdated: PropTypes.number,
    defaultCurrency: PropTypes.object,
    setNewCurrency: PropTypes.func,
    delete: PropTypes.func,
    edit: PropTypes.func,
    editMode: PropTypes.bool,
  }

  onChange = evt => this.setState({[evt.target.name]: evt.target.value});
  onChangeDate = evt => {
    return this.setState({[evt.target.name]: Moment(evt.target.value, 'YYYY-MM-DD').format('DD/MM/YYYY')})
  };

  saveData = () => {
    if(!this.props.editMode) {
      this.setState({ id: uuidv4() });
      this.props.setNewCurrency(fromJS(this.state));
    }else{
      this.props.edit(this.state.id, fromJS(this.state));
    }
  };

  deleteData = () => {
    const response = confirm('Desea borrar este registro?');
    if(response)
      this.props.delete(this.state.id);
  }

  componentWillReceiveProps(props) {
    this.setState({
      id: props.id || uuidv4(),
      name: props.name || null,
      code: props.code || null,
      symbol: props.symbol || null,
      dolar: props.dolar || 0.00,
      dateUpdated: props.dateUpdated || null,
    });
  }

  render(){
    const { id, ...cells} = this.state;
    return <RowsComponent
      isRow={this.props.isRow}
      render={this.props.render}
      canModify={this.props.canModify}
      onChange={this.onChange}
      onChangeDate={this.onChangeDate}
      cells={cells}
      formData={formData}
      onSave={this.saveData}
      onDelete={this.deleteData}
      editMode={this.props.editMode}
    />;
  }
}


export default CurrencyComponent;