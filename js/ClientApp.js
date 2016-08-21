var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')
var div = React.DOM.div

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'props are great', color: 'mediumaquamarine'}),
    React.createElement(MyTitle, {title: 'love props', color: 'tomato'}),
    ce(MyTitle, {title: 'gotta love props', color: 'peru'})
  )
)
ReactDOM.render(MyFirstComponent, document.getElementById('app'))
