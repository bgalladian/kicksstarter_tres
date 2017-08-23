import React, { Component } from 'react';
import AddDesign from './components/AddDesign'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <AddDesign />
      </div>
    );
  }
}

export default App;
