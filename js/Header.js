const React = require('react')
const { Link } = require('react-router')

class Header extends React.Component {

  render () {
    return (
      <header className="header">
        <h1 className="brand">
          <Link to='/' className='brand-link'>
            svideo
          </Link>  
        </h1>
        <h2 className="header-back">
          <Link to='/search' className='brand-link'>
            back
          </Link> 
        </h2>
      </header>
    )
  }
}

module.exports = Header
