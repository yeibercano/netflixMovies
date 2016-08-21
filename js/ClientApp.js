/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

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
