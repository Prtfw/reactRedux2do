var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    expect = require('expect'),
    $ = require('jquery')
    
var Add = require('add')

describe('Add', () => {
    it('should exit', () => {
        expect(Add).toExist();
    })
    
    it('should call onAddTodo func on prop with valide data', () => {
        var spy = expect.createSpy();
        
    })
})