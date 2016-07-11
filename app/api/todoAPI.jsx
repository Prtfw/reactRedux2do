var $ = require("jquery")

module.exports = {
    setTodos: function(todos){
        if ($.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos))
            return todos
        }
    },
    getTodos: function(){
        var todosStr = localStorage.getItem('todos')
        var todos = []
        try{ todos = JSON.parse(todosStr)}
        catch(e){
            console.log(e)
        }
        
        return $.isArray(todos) ? todos : []
    //   if ($.isArray(todos)){ //check if malicious data inputted 
    //       return todos
    //   }else{return []}
    }
}