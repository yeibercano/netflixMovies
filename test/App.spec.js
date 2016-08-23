/* eslint-env mocha */ 

const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const { shallow } = require('enzyme')
const { shows } = require('../public/data')
const { store, rootReducer } = require('../js/Store')

xdescribe('<Search />', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.contains(<h1 className="brand">svideo</h1>)).to.be.true
  })
  it('render same length of cards as data', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })
  it('filter new state', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })
})

describe('Store', () => {
  it('should bootstrap', () => {
    const state = rootReducer(undefined, { type: '@@redux/INIT'})
    expect(state).to.deep.equal({ searchTerm: ''})
  })
  it('should handle seSearchTerm actions', () => {
    const state = rootReducer({ searchTerm: 'some string'}, { type: 'setSearchTerm', value: 'correct string'})
    expect(state).to.deep.equal({ searchTerm: 'correct string' })
  })
})
