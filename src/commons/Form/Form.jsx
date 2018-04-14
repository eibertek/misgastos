import { Component } from 'react';
import Input from './Input/Input.jsx';

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  renderInput = ({type, name, onChange, placeholder, label, renderMethod}) => {
    if(renderMethod) return renderMethod({label, type, name});
    return <div>
      <Input 
        type={type} 
        name={name} 
        onChange={onChange} 
        placeholder={placeholder} 
        label={label}/>
    </div>;
  }

  render = () => {
    const { children, onSave } = this.props;
    return <div className="">
      {children.map(child => this.renderInput(child.props))}
      <button onClick={onSave} className="registry btn btn-md">Guardar</button>
    </div>;
  }
}

export default FormComponent;