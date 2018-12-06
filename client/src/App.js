import React, { Component } from 'react';
import './App.css';
import DrizzleContext from './components/DrizzleContext';
import ReadString from './components/ReadString';
import SetString from './components/SetString';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  // var storedData = this.props.drizzleStatus.initialized ? this.contracts.SimpleStorage.methods.storedData.data() : 'Loading...'

  render() {
    const { initialized } = this.context;

    if (!initialized) {
      return "Loading Drizzle";
    }

    return (
      <div className="App">
        Drizzle Boilerplate
        <ReadString />
        <SetString />
      </div>
    );
  }
}

App.contextType = DrizzleContext.Context;

export default App;
