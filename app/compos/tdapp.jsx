var React = require("react")
var Todos = require("todos")

var main2do = React.createClass({
    getInitialState: function(){
      return{
          todos: [
              {id: 1, txt: 'find land'},
              {id: 2, txt: 'get tool'},
              {id: 3, txt: 'cut logs'},
              {id: 4, txt: 'prep ground'},
              {id: 5, txt: 'get dog team'},
              ]
      }  
    },
    
    render: function(){
        var {todos} = this.state
    return(
        <div>
            <Todos todos={todos}/>
        </div>
        )
        
    }
})


module.exports = main2do