import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { fromJS } from 'immutable';
import Moment from 'moment';
import RowsComponent from 'src/commons/Rows/RowsComponent.jsx';
import formData from './formData';
import Form from 'src/commons/Form/Form.jsx';
import Select from 'src/commons/Form/Select/Select.jsx';

class RegistriesForm extends Component {
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
  }

  static propTypes = {
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
    deleteRegistry: PropTypes.func,
    editMode: PropTypes.bool,
    accounts: PropTypes.object,
  }

  onChange = evt => this.setState({[evt.target.name]: evt.target.value});

  onChangeDate = evt => {
    return this.setState({[evt.target.name]: Moment(evt.target.value, 'YYYY-MM-DD').format('DD/MM/YYYY')})
  };

  renderAccounts = ({ name, type, label}) => {
    const { accounts } = this.props;
    if(accounts.size<1) return null;
    const accountsJS = accounts.toJS().map( act => ({ key: act.id, value: act.name }));
    return <Select 
      name={name} 
      onChange={this.onChange} 
      label='Cuenta'
      value={accountsJS[0].key}
      options={accountsJS} 
    />;
  }

  saveData = () => {
    if(!this.props.editMode) {
      this.setState({ id: uuidv4() });
      this.props.setNewRegistry(fromJS(this.state));
    }else{
      this.props.editRegistry(this.state.id, fromJS(this.state));
    }
  };

  render(){
    return <Form onSave={this.saveData}>
    {formData.map(field => <Fragment 
      {...field} 
      renderMethod={this[field.renderMethod] || null} 
      onChange={this[field.onChange]} />)}
    </Form>
  }
}


export default RegistriesForm;