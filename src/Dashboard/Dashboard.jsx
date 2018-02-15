import { Component } from 'react';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return <div>
      <h1>Dashboard de finanzas</h1>
      <h2>Registros</h2>
      <div className="panel">No hay registros</div>
    </div>
  }
}

export default Dashboard;