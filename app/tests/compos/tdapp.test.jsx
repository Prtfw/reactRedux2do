var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    expect = require('expect'),
    $ = require('jquery')
    
var Tdapp = require('tdapp')

describe('Tdapp', () => {
    it('should exit', () => {
        expect(Tdapp).toExist();
    })
    
  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<Tdapp/>);

    todoApp.setState({todos: []});
    todoApp.handAdd2do(todoText);
    console.log(todoApp.state.todos[0])
    expect(todoApp.state.todos[0].txt).toBe(todoText);
  });
});