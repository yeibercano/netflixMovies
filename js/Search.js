const React = require('react')
const data = require('../public/data')
const ShowCard = require('./ShowCard')

const Search = () => (
  <div className="container">
    <header className="header">
      <h1 className="brand">svideo</h1>
      <input type="text" placeholder='search' className="search-input"/>
    </header>
    <div className="shows">
      {data.shows.map((show) => (
        <ShowCard {...show} key={show.imdbID} />
      ))}
    </div>
  </div>
)

module.exports = Search
