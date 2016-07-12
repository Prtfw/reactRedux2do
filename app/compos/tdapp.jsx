var React = require("react"),
    uuid = require("node-uuid"),

    Todos = require("todos"),
    Add2do = require("addTD"), 
    SearchTD = require("searchTD"),
    todoApi = require("todoAPI")
    
var main2do = React.createClass({
    getInitialState: function(){
      return{
            todos: todoApi.getTodos(),
            shocomp: false,
            searchtxt: ''
      }  
    },
    componentDidUpdate: function(){
        todoApi.setTodos(this.state.todos)
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
        var {todos, shocomp, searchtxt} = this.state
        var filtered = todoApi.filter(todos, shocomp, searchtxt)
    return(
        <div>
            <SearchTD onSearch ={this.handSearch}/>
            <Todos todos={filtered} onToggle={this.handToggle}/>
            <Add2do handAdd2do={this.handAdd2do}/>
        </div>
        )
        
    }
})


module.exports = main2do