const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Layout = require('./Layout')
const { Router, Route, hasHistory, IndexRoute } = require('react-router')
const Search = require('./Search')
const Details = require('./Details')
const { shows } = require('../public/data')
const { store } = require('./Store')
const { Provider } = require('react-redux')

const App = React.createClass({
  assignShow (nextState, replace) {
    const showArray = shows.filter((show) => show.imdbID === nextState.params.id)

    if (showArray.length < 1) {
      return replace('/') // send them to homepage, but 404 would be better
    }

    Object.assign(nextState.params, showArray[0])
    return nextState
  },
  render () {
    return (
      <Provider store={store}>
        <Router history={hasHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} shows={shows} />
            <Route path='/details/:id' component={Details} onEnter={this.assignShow} />
          </Route>
        </Router>
      </Provider>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
