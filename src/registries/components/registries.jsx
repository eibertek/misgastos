import { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { fromJS } from 'immutable';
import RowsComponent from '../../commons/Rows/RowsComponent.jsx';
import formData from './formData';
import './styles.scss';

class RegistriesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id || uuidv4(),
      date: this.props.date || null,
      account: this.props.account || null,
      name: this.props.name || null,
      description: this.props.description || null,
      debit: this.props.debit || 0.00,
      credit: this.props.credit || 0.00,
      balance: this.props.balance || 0.00,
      dolar: this.props.dolar || 0.00,
    };
    formData.map( (field, index) =>
      field.defaultValue = this.state[field.name]);
  }

  static propTypes = {
    canModify: PropTypes.bool,
    isRow: PropTypes.bool,
    render: PropTypes.func,
    id: PropTypes.string,
    date: PropTypes.string,
    account: PropTypes.any,
    name: PropTypes.string,
    description: PropTypes.string,
    debit: PropTypes.number,
    credit: PropTypes.number,
    balance: PropTypes.number,
    dolar: PropTypes.number,
    setNewRegistry: PropTypes.func,
    editMode: PropTypes.bool,
  }

  onChange = evt => this.setState({[evt.target.name]: evt.target.value});
  saveData = () => {
    if(!this.props.editMode) {
      this.setState({ id: uuidv4() });
      this.props.setNewRegistry(fromJS(this.state));
    }else{
      this.props.editRegistry(this.state.id, this.state);
    }
  }

  render(){
    console.log('Se envia a renderear', this.state);
    const { id, description, balance, ...cells} = this.state;
    return <RowsComponent
      isRow={this.props.isRow}
      render={this.props.render}
      canModify={this.props.canModify}
      onChange={this.onChange}
      cells={cells}
      formData={formData}
      onSave={this.saveData}
      editMode={this.props.editMode}
    />;
  }
}


export default RegistriesComponent;