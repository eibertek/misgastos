import React, { Component } from 'react';
import Moment from 'moment';
import ReactDOM from 'react-dom';
import CountrySelect from './countries/';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Moment(),
    };
  }

  componentWillMount() {
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => (this.setState({ time: new Moment() })), 1000);
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    return <CountrySelect />;
  }
}

ReactDOM.render(<App />, document.getElementById('app-root'));
