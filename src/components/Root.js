import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from '../reducers'
import { Router, Route, Redirect, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const store = createStore(reducer)

const history = syncHistoryWithStore(browserHistory, store)

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path="/" />
        <Route path="codes" />
        <Route path="apps" />
        <Route path="sites" />
        <Redirect from="*" to="/" />
      </Route>
    </Router>
  </Provider>
)

export default Root
