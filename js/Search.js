const React = require('react')
const ShowCard = require('./ShowCard')
const { object } = React.PropTypes
const Header = require('./Header')

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    route: object
  },
  handleSearchTermChange(searchTerm) {
    e.preventDefault()
    this.setState({ searchTerm })
  },

  render () {
    return (
      <div className="container">
        <Header 
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm} 
          showeSearch 
        />
        <div className="shows">
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
