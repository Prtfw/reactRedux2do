var React = require("react"),
    moment = require("moment")

var Todo = React.createClass({

        render: function(){
            var {id, txt, done, madeDate, doneDate} = this.props //this works because the {...'todo'} spread operator... 
            //the props of todo are passed down as individual properties 'MMMM Do, YYYY @ h:mm A'
            
            var todoClass= done ? 'todo todo_done' : 'todo'
            console.log(todoClass)
            var shodate =()=>{
                var msg = 'created'
                var shoDate = moment.unix(madeDate).utcOffset(-5).format('Do/MMM @ h:mm a')
                
                if (done){
                    console.log('done')
                    msg = 'completed'
                    shoDate = moment.unix(doneDate).utcOffset(-5).format('Do/MMM @ h:mm a')
                }
                return  msg+ ' @ ' + shoDate
            }
            return (
                <div  className={todoClass} onClick={()=>{this.props.onToggle(id)}}>
                <div>  <input onClick={this.handClick} type='checkbox' checked={done} /></div>
                <div>
                <p>{txt}</p> 
                <p className='todo_subtxt'> {shodate()} </p>
                </div>

                </div>
                
                )
        }
})

module.exports = Todo