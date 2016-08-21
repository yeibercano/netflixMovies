const React = require('react')
const data = require('../public/data')
const ShowCard = require('./ShowCard')

const Search = React.createClass({
  getInitialState() {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermEvent(e) {
    e.preventDefault()
    this.setState({ searchTerm: e.target.value })
  },

  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className="brand">svideo</h1>
          <input 
          value= {this.state.searchTerm}
          onChange={this.handleSearchTermEvent}
          type="text" 
          placeholder='search' 
          className="search-input"/>
        </header>
        <div className="shows">
          {data.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >=0)
            .map((show) => (
            <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
