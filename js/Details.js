const React = require('react')

class Details extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="container">
        <pre><code>
          {JSON.stringify(this.props, null, 4)}
        </code></pre>
      </div>    
    )
  }
}

module.exports = Details
