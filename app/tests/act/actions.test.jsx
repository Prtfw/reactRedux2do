var expect = require("expect")
var actions = require('actions')

describe('Actions', ()=>{
    
it('should gen search text action', () => {
       var action  = {
        type: "CHNG_SEARCH",
        searchtxt: 'some txt'
    }
        
        var res = actions.chngsearch(action.searchtxt)
    
        expect(res).toEqual(action)
    })
    
    
it ("should gen add todo action", ()=>{
    var action={
        type: "ADDTD",
        txt: "todo txt yo!"
    }

    var res = actions.addTD(action.txt)
    expect(res).toEqual(action)
})

it('should generate addtodos func', ()=> { 
        var todos = [{id:111, txt: 'testy mctestson', done: false, madeDate: 3000030, doneDate: undefined}]
        //localStorage.setItem('todos', JSON.stringify(todos)) //do not use setTodos... test one thing at a time!
        var action = {type: "ADDTDS", todos}
        var act = actions.addTDs(todos)
        expect(act).toEqual(action) //toBe compares the obj in memory
    })

it ("should change shocomp", ()=>{
    var action={
        type: "CHNG_SHOCOMP",
    }
    
    var res = actions.chngshocomp()
    expect(res).toEqual(action)
})

it ("should toggle done", ()=>{
    var action={
        type: "CHNG_DONE",
        id: 3
    }
    
    var res = actions.doneTD(action.id)
    expect(res).toEqual(action)
})
    
})