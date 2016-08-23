const React = require('react')
const Layout = require('./Layout')
const { Router, Route, browserHistory, IndexRoute } = require('react-router')
const { store } = require('./Store')
const { Provider } = require('react-redux')

if (typeof module !== undefined && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure') // shim for node.js
  }
}

const rootRoute = {
  component: Layout, 
  path:'/',
  IndexRoute: {
    getComponent (location, cb) {
      rquire.ensure([], (error) => {
        cb(null, require('./Landing'))
      })
    }
  },
  childRoutes: [
    path: 'search',
    getComponent (location, cb) {
      require.ensure([], (error) => {
        cb(null, require('./Search'))
      })
    },
    path: 'details/:id',
    getComponent (location, cb) {
      require.ensure([], (error) => {
        cb(null, require('./Details'))
      })
    }
  ]
}


const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={rootRoute}/>
      </Provider>
    )
  }
})

App.Routes = rootRoute
App.history = browserHistory

module.exports = App
