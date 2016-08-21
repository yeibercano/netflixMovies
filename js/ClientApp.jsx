const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')

const MyFirstComponent = () => (
  <div>
   <MyTitle title="That's wasup" color='rebeccapurple' />
   <MyTitle title="Why not" color='peru' />
   <MyTitle title="Why yes" color='tomatos' />
  </div>
)

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
