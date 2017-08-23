import React from 'react';
import ReactDOM from 'react-dom';
import DesignContainer from './components/DesignContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <DesignContainer
    url="http://localhost:3001/api/designs"
    pollInterval={2000} />
  , document.getElementById('root'));
registerServiceWorker();
