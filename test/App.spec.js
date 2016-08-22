/* eslint-env mocha */ 

const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const { shallow } = require('enzyme')
const { shows } = require('../public/data')

describe('<Search />', () => {
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
