const React = require('react')
const { Link } = require('react-router')

class Landing extends React.Component {
  render () {
    return (
      <div className='home-info'>
        <h1 className="title">svideo</h1>
        <input className="search" type="text" placeholder="Search"></input>
        <Link to="/search" className="browse-all">or browse all</Link>
      </div>
    )
  }
}

module.exports = Landing
