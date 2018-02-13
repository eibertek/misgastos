import React, { Component } from 'react';
import Moment from 'moment';
import FirstTimeComponent from './FirstTime/';

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

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    return this.state.firstTime ? <FirstTimeComponent></FirstTimeComponent> : <div />;
  }
}

