import React, { Component } from 'react';
import './App.css';
import StudioList from './containers/StudioList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Yoga Studios List</h1>
        </header>
        <StudioList/>
      </div>
    );
  }
}

export default App;
