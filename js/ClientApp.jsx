const React = require('react')
const ReactDOM = require('react-dom')

const App = () => (
  <div className="app-container">
    <div className='home-info'>
      <h1 className="title">svideo</h1>
      <input className="search" type="text" placeholder="Search"></input>
      <button className="browse-all">or browse all</button>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
