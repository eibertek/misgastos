import { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class RegistriesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      date: null,
      account: null,
      name: null,
      description: null,
      debit: 0.00,
      credit: 0.00,
      balance: 0.00,
      dolar: this.props.dolar || 0.00,
    }
  }

  static propTypes = {
    canModify: PropTypes.bool,
    isRow: PropTypes.bool,
    render: PropTypes.func,
    id: PropTypes.string,
    date: PropTypes.string,
    account: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    debit: PropTypes.number,
    credit: PropTypes.number,
    balance: PropTypes.number,
    dolar: PropTypes.number,
  }

  onChangeDate = evt => this.setState({[evt.target.name]: evt.target.value});
  onChangeValue = evt => this.setState({[evt.target.name]: evt.target.value});

  renderRow = () => {
    return <tr>
      <td >{this.props.date}</td>
      <td >{this.props.account}</td>
      <td >{this.props.name}</td>
      <td >{this.props.debit}</td>
      <td >{this.props.credit}</td>
      <td >{this.props.dolar}</td>
    </tr>;
  }

  renderForm = () => {
    return <div className="form-group">
      <div className="registry">
        <input type="date" name="date" onChange={this.onChangeDate} placeholder="date"/>
      </div>
      <div className="registry">
        <input type="text" name="account" onChange={this.onChangeValue} placeholder="account"/>
      </div>
      <div className="registry">
        <input type="text" name="name" onChange={this.onChangeValue} placeholder="name"/>
      </div>
      <div className="registry">
        <input type="number" name="debit" onChange={this.onChangeValue} placeholder="debit"/>
      </div>
      <div className="registry">
        <input type="number" name="credit" onChange={this.onChangeValue} placeholder="credit"/>
      </div>
      <div className="registry">
        <input type="number" name="dolar" defaultValue={this.state.dolar} onChange={this.onChangeValue} placeholder="dolar"/>
      </div>
      <button className="registry btn btn-md">Guardar</button>
    </div>;
  }

  render(){
    if(this.props.render) return this.props.render();
    if(this.props.isRow) return this.renderRow();
    if(this.props.canModify) return this.renderForm();
    return <div>AA</div>;
  }
}


export default RegistriesComponent;