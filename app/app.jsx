    var React = require("react")
    var ReactDom = require("react-dom")
    var {Route, Router, IndexRoute, hashHistory} = require("react-router")
    var {Provider} = require("react-redux")
    var $ = require("jquery")
    
    
    var Tdapp = require("tdapp")
    
    var actions = require("actions")
    var store = require("configStore").config()
    var todoAPI = require("todoAPI")
    
    console.log(store)
    
    store.subscribe(()=> {
        var state=store.getState()
        console.log('new state ', store.getState())
        todoAPI.setTodos(state.todos)
    })
    
    var init2Todos = todoAPI.getTodos()
    
    store.dispatch(actions.addTDs(init2Todos))


    //store.dispatch(actions.addTD("walkie talkie"))
    //store.dispatch(actions.chngsearch("walk"))
    //store.dispatch(actions.chngshocomp())
    //load foundation 
    //require("style!css!foundation-sites/dist/foundation.min.css")
    
   $(document).foundation();
   require('style!css!sass!appscss')

  

    
    /* //ES6 destructuring syntax 
       var Route = require('react-router').Route ect... 
       var obj={name: 'mads'} || var {name} = obj: <=> var name = obj.name
    */
    
   

   
    ReactDom.render(
        <Provider store={store}>
        <Tdapp />
        </Provider>,
        document.getElementById('app')
        )
        
        
        
//when button gets clicked, call a parent function on the prop called child'name=parentfunctionName = setState
//hook up statevar=updated name to the rendering compo = passin

//containers has state, dumb compo don't
//can't ever update props... you just get those, can update state tho if container
//containers should not do much other than rendering children (should have a root div but that's about it)