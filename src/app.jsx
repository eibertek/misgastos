import React, { Component } from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';
import FirstTimeComponent from './FirstTime/';
import Dashboard from './Dashboard/';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Moment(),
      firstTime:true,
    };
  }

// frist time loading: on the first time we need the dialog box where you can choose country currency and change type
  componentWillMount() {
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => (this.setState({ time: new Moment() })), 1000);
  }

  togglePopup = () => this.setState({firstTime: false });

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    if(this.state.error) return <div>OCURRIO UN ERROR</div>;
    return this.state.firstTime ? <FirstTimeComponent closePopup={this.togglePopup}></FirstTimeComponent> : <Dashboard />;
  }
}

