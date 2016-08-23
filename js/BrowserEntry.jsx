const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./ClientApp')
const { match } require('react-router')

match({ history: App.history, routes: App.Routes }, (error, redirectLocation, renderProps) => {
  if (error) {
    return console.log.error('BrowserEntry error', error)
  }
  ReactDOM.render(<App {...renderProps}/>, document.getElementById('app'))
})

