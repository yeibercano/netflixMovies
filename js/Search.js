const React = require('react')
const data = require('../public/data')

const Search = () => (
  <div className="container">
    {data.shows.map((show) => (
      <div className="show">
        <img src={`public/img/posters/${show.poster}`} className="show-img" alt={show.title} />
        <div className="show-text">
          <h3 className="show-title">{show.title}</h3>
          <h4 className="show-year">({show.year})</h4>
          <p className="show-description">{show.description}</p>
        </div>
      </div>
    ))}
  </div>
)

module.exports = Search
