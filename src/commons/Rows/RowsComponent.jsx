import { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
//import './styles.scss';

class RowsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canModify: this.props.canModify || false,
    };
  }

  static propTypes = {
    canModify: PropTypes.bool,
    isRow: PropTypes.bool,
    render: PropTypes.func,
    cells: PropTypes.object,
    onChange: PropTypes.func,
    formData: PropTypes.array,
    onSave: PropTypes.func,
    editMode: PropTypes.bool,
  }

  toggleEdit = () => {
    this.setState({ canModify: !this.state.canModify })
    this.props.onSave();
  }

  renderRow = () => {
    const cells = Object.keys(this.props.cells);
    let item = 0;
    return <tr key={item}>
      {this.props.editMode ? <td>
        <button onClick={this.toggleEdit}>[ E ]</button> | <button>[ D ]</button>
      </td>: null}
      {this.state.canModify ? this.props.formData.map(cell =>
                                <td key={++item}>{this.renderInput(cell)}</td>) : cells.map(cell => <td key={++item}>{this.props.cells[cell]}</td>)}
      </tr>;
  }

  renderInput = (item, { type, name, onChange, placeholder, defaultValue }) => {
    const onChangeFn = onChange || this.props.onChange;
    const defValue = (type==='date' && defaultValue ? Moment(defaultValue, 'DD/MM/YYYY').format('YYYY-MM-DD'): defaultValue) || '';
    return <div key={item} className="registry">
      <input type={type} name={name} onChange={onChangeFn} placeholder={placeholder} defaultValue={defValue}/>
    </div>;
  }

  renderForm = () => {
    let item = 0;
    return <div className="form-group">
      {this.props.formData.map(field => {
        return this.renderInput(++item, field);
      })}
      <button onClick={this.props.onSave} className="registry btn btn-md">Guardar</button>
    </div>;
  }

  render(){
    if(this.props.render) return this.props.render();
    if(this.props.isRow) return this.renderRow();
    if(this.state.canModify) return this.renderForm();
    return <div>AA</div>;
  }
}


export default RowsComponent;