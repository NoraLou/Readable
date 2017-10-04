import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//import Test from './components/Test';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
//import Test from './components/Test';
// import { createStore } from 'redux';
// import reducer from './reducers';
// import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <App />,
   document.getElementById('root'));
registerServiceWorker();
