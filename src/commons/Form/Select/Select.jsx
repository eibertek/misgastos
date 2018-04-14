import React, { Fragment } from 'react';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || '',
      id: props.id || '',
      label: props.label || '',
      onChange: props.onChange || this.onChange,
      options: props.options || [],
      value: props.value || null,
    }
  }

onChange = (evt) => this.setState({[evt.name]: evt.value});

render(){
    const { name, id, onChange, label, options, value } = this.state;
    return <Fragment>
      <label className="col-2 col-form-label" for={name}>{label}</label>
      <select
        className="col-8 col-form-control" 
        name={name} 
        onChange={onChange} 
        value={value}>
        {options.map(opt => 
            <option key={opt.key} value={opt.key}>
                {opt.value}
            </option>)};
      </select>
    </Fragment>;
  }
}

export default Select;