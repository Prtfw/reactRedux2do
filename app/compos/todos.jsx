var React = require("react")
var Todo = require("todo")

var Todos = React.createClass({
        render: function(){
            var {todos} = this.props

            var renderTodos = () => {
               // console.log("in todo map")
                return todos.map((todo)=> {
                    return(
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