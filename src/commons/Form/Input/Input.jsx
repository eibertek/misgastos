import React, { Fragment } from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type || 'text',
      name: props.name || '',
      id: props.id || '',
      label: props.label || '',
      onChange: props.onChange || this.onChange,
    }
  }

onChange = (evt) => this.setState({[evt.name]: evt.value});

render(){
  console.log(this.state);
    return <Fragment>
      <label className="col-2 col-form-label" for={this.state.name}>{this.state.label}</label>
      <input className="col-8 col-form-control" {...this.state} />
      </Fragment>;
  }
}

export default Input;