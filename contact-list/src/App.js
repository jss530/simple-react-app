import React, { Component } from 'react';
import './App.css';
import List from './containers/StudioList';
import Detail from './containers/StudioDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Yoga Studios List</h1>
        </header>
        <List />
        <Detail />
      </div>
    );
  }
}

export default App;
