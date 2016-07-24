var rdcrs = require("rdcrs"),
expect = require("expect"),
df = require("deep-freeze-strict")

describe ('reducers', ()=>{
    describe('search txt reducer', () =>{
        it('should change search txt', ()=>{
            var action = {
                type: "CHNG_SEARCH",
                searchtxt: 'some search txt'
            }
            var res = rdcrs.rdcrSearch('', df(action))
            expect(res).toEqual(action.searchtxt)
        })
        
    
        it('should toggle showcomp', ()=>{
            var action = {
                type: "CHNG_SHOCOMP",
            }
            var res = rdcrs.rdcrShocomp(false, df(action))
            expect(res).toEqual(true)
            var res = rdcrs.rdcrShocomp(true, df(action))
            expect(res).toEqual(false)
        })
        
        
    })
    
     describe('todo reducer', () =>{
         
        it('should add new todo', ()=>{
            var action = {
                type: "ADDTD",
                txt: 'todo txt'
            }
            var res = rdcrs.rdcrTodos([], df(action))
            expect(res.length).toEqual(1)
            expect(res[0].txt).toEqual(action.txt)
        })
        
        it('should load existing todos', ()=>{
            
        var todos = [{id:111, txt: 'testy mctestson', done: false, madeDate: 3000030, doneDate: undefined}]
            var action = {type: "ADDTDS", todos}
            var res = rdcrs.rdcrTodos(df([]), df(action))
            expect(res.length).toEqual(1)
            expect(res[0]).toEqual(todos[0])
        })
        
        it('should toggle todo', ()=>{
            var todos = [{id: '123', txt: 'somestuff', done: true, madeDate: 123, doneDate: 125}]
            var action = {
                type: "CHNG_DONE",
                id: '123'
                }
            var res = rdcrs.rdcrTodos(todos, df(action))
            console.log('res ', res[0])
            expect(res[0].done).toEqual(false)
            //expect(res[0].txt).toEqual(action.txt)
        })
        
     })
})