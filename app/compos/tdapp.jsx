var React = require("react"),
    Todos = require("todos"),
    Add2do = require("addTD"), 
    SearchTD = require("searchTD"),
    uuid = require("node-uuid")
var main2do = React.createClass({
    getInitialState: function(){
      return{
          todos: [
              {id: 1, txt: 'find land', done: false},
              {id: 2, txt: 'get tool', done: true},
              {id: 3, txt: 'cut logs',  done: false},
              {id: 4, txt: 'prep ground',  done: false},
              {id: 5, txt: 'get dog team',  done: false},
              ],
            shocomp: false,
            searchtxt: ''
      }  
    },
    handAdd2do: function(text) { //static version that pretends to add state to make sure add form works
      // alert('new 2do' + txt)
       /* var ind = this.state.todos.length +1
       var newTodo= {
           id: uuid(),
           txt: txt
       }
       console.log(newTodo)
      var oldTodos = this.state.todos
      console.log(oldTodos)
      var newTodos = []
      newTodos = oldTodos.push(newTodo)
      
      //console.log(newTodos[ind-1])
      this.setState({
         todos: newTodos
      })
      console.log(this.state.todos)
      */
      
      this.setState({
          todos: [
              ...this.state.todos, 
              {id:uuid(), txt:text,  done: false }]
      })
      
      
    },
    handToggle: function  (tid)  {
        
        var updTodos = this.state.todos.map((todo)=>{
            if (todo.id === tid){
                todo.done = !todo.done
            }
            return todo;
        })
        //alert(id)
        this.setState({
            todos: updTodos
        })
    },
     handSearch: function  (shocomp, searchtxt)  {
        console.log(shocomp, searchtxt)
        this.setState({
            shocomp: shocomp,
            searchtxt: searchtxt.toLowerCase()
        })
    },
    render: function(){
        //console.log('in tdapp', this.handAdd2do)
        var {todos} = this.state
    return(
        <div>
            <SearchTD onSearch ={this.handSearch}/>
            <Todos todos={todos} onToggle={this.handToggle}/>
            <Add2do handAdd2do={this.handAdd2do}/>
        </div>
        )
        
    }
})


module.exports = main2do