var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    expect = require('expect'),
    $ = require('jquery')
    
var SearchTD = require('searchTD') 

//for res components usually there is one place that calls the prop functions passed down from the parent... this the pieace we usually wana test
/*for testing with spy 
1. make spy = expect.createSpy()
2. define the compo using componame= TestUtils.renderIntoDocument(<compo u wana test nameofFUNCinCHILD = {spy})
3. set test value via refs componame.refs.refname.(property i.e. value) = somevalue
4. TestUtils.Simulate.<SomeAvailEvent>(theRefFromStep3)
  

*/    
describe('SearchTD', () => {
    it('should exit', () => {
        expect(SearchTD).toExist();
    })
    it('should call onSearch with entered input txt', () => {
        var searchtxt='madisrad'
        var spy = expect.createSpy();
        var search = TestUtils.renderIntoDocument(<SearchTD onSearch={spy}/>) 
        search.refs.search.value = searchtxt
        TestUtils.Simulate.change(search.refs.search)
        expect(spy).toHaveBeenCalled(false,searchtxt)
    })
    it('should call onSearch with proper checkbox val', () => {
        var spy = expect.createSpy()
        var search = TestUtils.renderIntoDocument(<SearchTD onSearch={spy} />)
        search.refs.shocomp.checked = true
        TestUtils.Simulate.change(search.refs.shocomp)
        expect(spy).toHaveBeenCalledWith(true,'')
    })
})