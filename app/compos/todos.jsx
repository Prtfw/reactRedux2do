var React = require("react")
var Todo = require("todo")

var Todos = React.createClass({
        render: function(){
            var {todos} = this.props

            var renderTodos = () => {
               // console.log("in todo map")
                  if (todos.length <1) {
                      return (<p className='container__msg'> Free and clear, my friend! </p>)
                  }
                  else{
                  
                return todos.map((todo)=> {
                
                    return(
                        <Todo onToggle={this.props.onToggle}  key={todo.id} {...todo} />
                        )
                })}
            };
            return (
                
                <div>
                    {renderTodos()}
                </div>
                
                )
        }
})

module.exports = Todos