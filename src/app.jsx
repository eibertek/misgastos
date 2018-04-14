import React, { Component, Fragment } from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';
import FirstTimeComponent from './FirstTime/';
import Dashboard from './Dashboard/';
import Settings from './Settings';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log(props.loadData)
    this.state = {
      time: new Moment(),
      firstTime:!!!props.loadData ? true : false,
      settings: false,
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

  toggleSettings = () => this.setState({settings: !this.state.settings });

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    if(this.state.error) return <div>OCURRIO UN ERROR</div>;
    return this.state.firstTime ? <FirstTimeComponent closePopup={this.togglePopup}></FirstTimeComponent> :
      <Fragment>
        <Settings />
        <Dashboard  openSettings={this.toggleSettings}/>
      </Fragment>;
  }
}

