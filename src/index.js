

import './index.css';
//import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CalculatorContainer from './containers/CalculatorContainer';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <CalculatorContainer />
  </Provider>,
   document.getElementById('root')
);
registerServiceWorker();
