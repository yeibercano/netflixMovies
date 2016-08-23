const React = require('react')
const { Link } = require('react-router')
const { connector } = require('./Store')
const { hashHistory } = require('react-router')

class Landing extends React.Component {
  constructor (props) {
    super(props)
    this.handleSerchTermEvent = this.handleSerchTermEvent.bind(this)
    this.goToSearch = this.goToSearch.bind(this)
  }
  handleSerchTermEvent (e) {
    this.props.setSearchTerm(e.target.value)
  }
  goToSearch (e) {
    e.preventDefault()
    hashHistory.push('search')
  }

  render () {
    return (
      <div className='home-info'>
        <h1 className="title">svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input value={this.props.searchTerm} onChange={this.handleSerchTermEvent}className="search" type="text" placeholder="Search"></input>
        </form>
        <Link to="/search" className="browse-all">or browse all</Link>
      </div>
    )
  }
}

const { func, string } = React.PropTypes
Landing.propTypes = {
  searchTerm: string,
  setSearchTerm: func
}

module.exports = connector(Landing)
