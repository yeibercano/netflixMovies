const React = require('react')
const Landing = require('./Landing')
const Layout = require('./Layout')
const { Router, Route, hashHistory, IndexRoute } = require('react-router')
const Search = require('./Search')
const Details = require('./Details')
const { store } = require('./Store')
const { Provider } = require('react-redux')

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} />
            <Route path='/details/:id' component={Details} />
          </Route>
        </Router>
      </Provider>
    )
  }
})

module.exports = App
