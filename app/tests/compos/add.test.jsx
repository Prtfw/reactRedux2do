var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    expect = require('expect'),
    $ = require('jquery')
    
var Add2do = require('addTD')

describe('Add2do', () => {
    it('should exit', () => {
        expect(Add2do).toExist();
    })
    
    it('should call onAddTodo func on prop with valide data', () => {
        var addtxt = 'check mail'
        var spy = expect.createSpy();
        var add2do = TestUtils.renderIntoDocument(<Add2do handAdd2do={spy} />);
        var $el = $(ReactDOM.findDOMNode(add2do))
        add2do.refs.add.value = addtxt
        TestUtils.Simulate.submit($el.find('form')[0])
        expect(spy).toHaveBeenCalledWith(addtxt)
    })
    
    it('should NOT call onAddTodo func on prop with bad data', () => {
        var addtxt = ''
        var spy = expect.createSpy();
        var add2do = TestUtils.renderIntoDocument(<Add2do handAdd2do={spy} />);
        var $el = $(ReactDOM.findDOMNode(add2do))
        add2do.refs.add.value = addtxt
        TestUtils.Simulate.submit($el.find('form')[0])
        expect(spy).toNotHaveBeenCalled(addtxt)
    })
})