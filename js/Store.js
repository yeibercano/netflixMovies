const redux = require('redux')
const reactRedux = require('react-redux')

const SET_SEARCH_TERM = 'setSearchTerm'
const initialState = {
  searchTerm: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      const newState = {}
      Object.assign(newState, state, {searchTerm: action.value})
      return newState
    default:
      return state
  }
}

const store = redux.createStore(rootReducer, initialState, redux.compose(typeof window === 'object' && typeof window.deveToolsExtension !== 'undefined' ? window.deveToolsExtension() : (f) => f ))

const mapStateToProps = (state) => {
  return { searchTerm: state.searchTerm }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm: (searchTerm) => {
      dispatch({type: SET_SEARCH_TERM, value: searchTerm})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store }
