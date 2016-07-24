var redux = require("redux"),
{rdcrSearch, rdcrShocomp, rdcrTodos} = require("rdcrs")



export var config = (initS = {})=>{
    var reducer = redux.combineReducers({ // format = key: value, state on the state tree:rdcr resp for handling that state i.e. get from setdefault state
        searchtxt: rdcrSearch,
        shocomp: rdcrShocomp,
        todos: rdcrTodos
    })
    
    var store = redux.createStore(reducer, initS, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f=>f //is this function the reducer?
        ))
        
        console.log(store)
        
    return store
}