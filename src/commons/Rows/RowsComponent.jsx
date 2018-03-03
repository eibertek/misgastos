import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit';
import faRecycle from '@fortawesome/fontawesome-free-solid/faRecycle';
import faSave from '@fortawesome/fontawesome-free-solid/faSave';
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
    onDelete: PropTypes.func,
  }

  toggleEdit = (persist) => {
    return evt => {
      this.setState({ canModify: !this.state.canModify });
      if(persist) this.props.onSave();
    }
  }

  renderButtons = () => {
    if(this.state.canModify) {
      return <button onClick={this.toggleEdit(true)} name="savebtn" className="btn btn-sm">
                    <FontAwesomeIcon icon={faSave}/>
      </button>;
    }
    return <Fragment>
              <button className="btn btn-sm" name="editbtn" onClick={this.toggleEdit(false)}>
                  <FontAwesomeIcon icon={faEdit}/>
              </button> |
              <button className="btn btn-sm" onClick={this.props.onDelete}>
                <FontAwesomeIcon icon={faRecycle}/>
              </button>
    </Fragment>;
  }

  componentWillReceiveProps(props) {
    if(!props.editMode)
      this.setState({ canModify: false });
  }

  renderRow = () => {
    const cells = Object.keys(this.props.cells);
    let item = 0;
    return <tr key={item}>
      {this.props.editMode ? <td>
        {this.renderButtons()}
      </td>: null}
      {this.state.canModify ? this.props.formData.map(cell =>
                                <td key={++item}>{this.renderInput(cell)}</td>) : cells.map(cell => <td key={++item}>{this.props.cells[cell]}</td>)}
      </tr>;
  }

  renderInput = (values) => {
    const { type, name, placeholder } = values;
    const onChangeFn = type==='date' ? this.props.onChangeDate : this.props.onChange;
    const defaultValue = this.props.cells[name];
    const defValue = (type==='date' && defaultValue ? Moment(defaultValue, 'DD/MM/YYYY').format('YYYY-MM-DD'): defaultValue) || '';
    return <input type={type} name={name} onChange={onChangeFn} placeholder={placeholder} defaultValue={defValue}/>;
  }

  renderForm = () => {
    let item = 0;
    return <div className="form-group">
      {this.props.formData.map(field => {
        return <div key={++item} className="registry">{this.renderInput(field)}</div>;
      })}
      <button onClick={this.props.onSave} className="registry btn btn-md">Guardar</button>
    </div>;
  }

  render(){
    if(this.props.render) return this.props.render();
    if(this.props.isRow) return this.renderRow();
    if(this.state.canModify) return this.renderForm();
    return <div>something is wrong, may be a miss config?</div>;
  }
}


export default RowsComponent;