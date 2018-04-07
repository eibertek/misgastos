import { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { fromJS } from 'immutable';
import Moment from 'moment';
import RowsComponent from '../../commons/Rows/RowsComponent.jsx';
import formData from './formData';

class AccountsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id || uuidv4(),
      name: this.props.name || null,
      entity: this.props.entity || null,
      description: this.props.description || null,
      balance: this.props.balance || 0.00,
      currency: this.props.currency || null,
    };
  }

  static propTypes = {
    canModify: PropTypes.bool,
    isRow: PropTypes.bool,
    render: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
    entity: PropTypes.string,
    currencies: PropTypes.object,
    currency: PropTypes.string,
    description: PropTypes.string,
    balance: PropTypes.number,
    setNewAccount: PropTypes.func,
    deleteAccount: PropTypes.func,
    editAccount: PropTypes.func,
    editMode: PropTypes.bool,
  }

  onChange = evt => this.setState({[evt.target.name]: evt.target.value});
  onChangeDate = evt => {
    return this.setState({[evt.target.name]: Moment(evt.target.value, 'YYYY-MM-DD').format('DD/MM/YYYY')})
  };

  saveData = () => {
    if(!this.props.editMode) {
      this.setState({ id: uuidv4() });
      this.props.setNewAccount(fromJS(this.state));
    }else{
      this.props.editAccount(this.state.id, fromJS(this.state));
    }
  };

  deleteData = () => {
    const response = confirm('Desea borrar este registro?');
    if(response)
      this.props.deleteAccount(this.state.id);
  }

  componentWillReceiveProps(props) {
    this.setState({
      id: props.id || uuidv4(),
      name: props.name || null,
      entity: props.entity || null,
      description: props.description || null,
      balance: props.balance || 0.00,
      currency: props.currency || null,
    })
  }

  render(){
    const { id, ...cells} = this.state;
    return <RowsComponent
      isRow={this.props.isRow}
      render={this.props.render}
      canModify={this.props.canModify}
      onChange={this.onChange}
      onChangeDate={this.onChangeDate}
      onChangeSelect={this.onChange}
      cells={cells}
      formData={formData}
      onSave={this.saveData}
      onDelete={this.deleteData}
      editMode={this.props.editMode}
      currencies={this.props.currencies}
    />;
  }
}


export default AccountsComponent;