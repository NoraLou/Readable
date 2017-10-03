import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Test from './components/Test';
import registerServiceWorker from './registerServiceWorker';
 import App from './components/App';
// import { createStore } from 'redux';
// import reducer from './reducers';
// import { Provider } from 'react-redux'

ReactDOM.render(
    <App />,
   document.getElementById('root'));
registerServiceWorker();
