import { Component } from 'react';
import PropTypes from 'prop-types';
import RowsComponent from '../../commons/Rows/RowsComponent.jsx';
import formData from './formData';

class AccountsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id || null,
      name: this.props.name || null,
      entity: this.props.entity || null,
      description: this.props.description || null,
      balance: this.props.balance || 0.00,
      currency: this.props.currency || null,
    };
    formData.map( (field, index) =>
      field.defaultValue = this.state[field.name]);
  }

  static propTypes = {
    canModify: PropTypes.bool,
    isRow: PropTypes.bool,
    render: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
    entity: PropTypes.string,
    currency: PropTypes.string,
    description: PropTypes.string,
    balance: PropTypes.number,
    editMode: PropTypes.bool,
  }

  onChange = evt => this.setState({[evt.target.name]: evt.target.value});

  render(){
    const { id, ...cells} = this.state;
    return <RowsComponent
      isRow={this.props.isRow}
      render={this.props.render}
      canModify={this.props.canModify}
      onChange={this.onChange}
      cells={cells}
      formData={formData}
    />;
  }
}


export default AccountsComponent;