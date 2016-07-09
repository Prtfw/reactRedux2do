var React = require("react")
var Todo = require("todo")

var Todos = React.createClass({
        render: function(){
            var {todos} = this.props

            var renderTodos = () => {
                return todos.map((todo)=> {
                    return(
                        console.log(todo.txt, todo.id),
                        <Todo  key={todo.id} {...todo} />
                        )
                })
            };
            return (
                
                <div>
                    {renderTodos()}
                </div>
                
                )
        }
})

module.exports = Todos