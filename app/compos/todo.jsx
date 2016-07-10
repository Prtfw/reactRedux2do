var React = require("react")

var Todo = React.createClass({

        render: function(){
            var {id, txt, done} = this.props //this works because the {...'todo'} spread operator... 
            //the props of todo are passed down as individual properties

            return (
                <div onClick={()=>{
                    this.props.onToggle(id)
                }}>
                <input onClick={this.handClick} type='checkbox' checked={done} />
                { ' - '  + txt }
                </div>
                
                )
        }
})

module.exports = Todo