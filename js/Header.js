const React = require('react')
const { Link } = require('react-router')

class Header extends React.Component {

  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input value={this.state.searchTerm} onChange={this.handleSearchTermEvent} type="text" placeholder='search' className="search-input" />
    } else {
      utilSpace = (
        <h2 className="header-back">
          <Link to='/search' className='brand-link'>
            back
          </Link> 
        </h2>
      )
    }
    return (
      <header className="header">
        <h1 className="brand">
          <Link to='/' className='brand-link'>
            svideo
          </Link>  
        </h1>
       {utilSpace}
      </header>
    )
  }
}

module.exports = Header
