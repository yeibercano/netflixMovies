/* eslint-env mocha */ 

const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const { shallow } = require('enzyme')

describe('<Search />', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.contains(<h1 className="brand">svideo</h1>)).to.be.true
  })
 
})
