var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    expect = require('expect'),
    $ = require('jquery')
    
var Todos = require('todos')
var Todo = require('todo')

describe('Todos', () => {
    it('should exit', () => {
        expect(Todos).toExist();
    })
    
     it('should render 1 todo compos for each todo item', () => {
      var todos= [
              {id: 1, txt: 'find land'},
              {id: 2, txt: 'get tool'},
              {id: 3, txt: 'cut logs'},]
              
        var tdlist = TestUtils.renderIntoDocument(<Todos todos={todos} />)
        var todocompos = TestUtils.scryRenderedComponentsWithType(tdlist, Todo)
        expect(todocompos.length).toBe(todos.length)
    })
    it('should call onToggle Prop with id on click', () => {
        var todoData = {txt: 'text', done: false, id: 42}
        var spy= expect.createSpy()
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>)
        var $el = $(ReactDOM.findDOMNode(todo))
        TestUtils.Simulate.click($el[0])
        expect(spy).toHaveBeenCalledWith(todoData.id);
    })
})