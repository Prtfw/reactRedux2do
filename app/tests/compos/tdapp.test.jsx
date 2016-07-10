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
    
  it('should add todo to the todos state on handAddTodo', () => {
    var todoText = 'test text';
    var todoapp = TestUtils.renderIntoDocument(<Tdapp/>);
    todoapp.setState({todos: []});
    todoapp.handAdd2do(todoText);
    console.log(todoapp.state.todos[0])
    expect(todoapp.state.todos[0].txt).toBe(todoText);
  })
  
    it('should toggle completed todos when handtoggle is called', () => {
        var todoData = {txt: 'text', done: false, id: 42}
        var todoapp = TestUtils.renderIntoDocument(<Tdapp />)
        todoapp.setState({todos: [todoData]});
        expect(todoapp.state.todos[0].done).toBe(false);
        todoapp.handToggle(todoData.id)
        expect(todoapp.state.todos[0].done).toBe(true);
    })
    
});