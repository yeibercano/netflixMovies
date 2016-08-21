const React = require('react')

const Landing = () => (
  <div className="app-container">
    <div className='home-info'>
      <h1 className="title">svideo</h1>
      <input className="search" type="text" placeholder="Search"></input>
      <button className="browse-all">or browse all</button>
    </div>
  </div>
)

module.exports = Landing
