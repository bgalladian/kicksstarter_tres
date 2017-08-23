import React, { Component } from 'react';
import AddDesign from './components/AddDesign'
import DesignContainer from './components/DesignContainer'
import Designs from './components/Designs'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>kickSStarter</h2>
        <AddDesign />
        <DesignContainer />
        <Designs />
      </div>
    );
  }
}

export default App;
