const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Layout = require('./Layout')
const { Router, Route, hasHistory, IndexRoute } = require('react-router')
const Search = require('./Search')
const App = () => (
  <Router history={hasHistory}>
    <Route path='/' component={Layout} >
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
