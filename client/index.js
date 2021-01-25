import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store, {persistor} from './store'
import App from './app'
import {PersistGate} from 'redux-persist/lib/integration/react'
// establishes socket connection
import './socket'
import {LoadingView} from '../client/components/index'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('app')
)
