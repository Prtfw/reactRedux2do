var React = require("react")

var Todo = React.createClass({
        render: function(){
            var {id, txt} = this.props //this works because the {...'todo'} spread operator... 
            //the props of todo are passed down as individual properties
            return (
                <div>
                { id +  ' - '  + txt }
                </div>
                
                )
        }
})

module.exports = Todo