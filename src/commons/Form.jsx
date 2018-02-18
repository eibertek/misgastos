import { Component } from 'react';

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  renderInput = (type, name, onChange, placeholder, ...otherTags) => {
    const [ defaultValue ] = otherTags;
    return <div className="registry">
      <input type={type} name={name} onChange={onChange} placeholder={placeholder} defaultValue={defaultValue}/>
    </div>;
  }

  render = () => {
    return <div className="form-group">
      this.children.map(child => this.renderInput(child.props))
      <button className="registry btn btn-md">Guardar</button>
    </div>;
  }
}

export default FormComponent;