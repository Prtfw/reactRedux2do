var React = require("react"),
    Todos = require("todos"),
    Add = require("addTD") 


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
    
    handAdd2do: (txt) => { //static version that pretends to add state to make sure add form works
       
       console.log('handAdd2do called')
       alert('new 2do' + txt)
    },

    render: function(){
        console.log('in tdapp', this.handAdd2do)

        var {todos} = this.state
    return(
        <div>
            <Todos todos={todos}/>
            <Add onAdd={this.handAdd2do}/>
        </div>
        )
        
    }
})


module.exports = main2do