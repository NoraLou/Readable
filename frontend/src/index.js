import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

const loggerMiddleware = createLogger()

const store = createStore (
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)


ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')

);


