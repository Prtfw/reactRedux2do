var expect = require("expect")

var todoapi = require("todoAPI")

describe('todoAPI', () => {
    beforeEach(()=>{  // test life cycle runs before each test
        localStorage.removeItem('todos')
    })
    it('should exist', ()=> {
        expect(todoapi).toExist()
    })
    describe('setTodos', () => {
    it('should set todo items', ()=> { 
            var todos = [{id:1, txt: 'testy mctestson', done: false}]
            todoapi.setTodos(todos)
            var actual = JSON.parse(localStorage.getItem('todos'))
            expect(actual).toEqual(todos) //toBe compares the obj in memory
        }) 
    })
    
    describe('setTodos', () => {
    it('should not set invalid data (not array)', ()=> { 
            var badtodos = {id:1, txt: 'testy mctestson', done: false}
            todoapi.setTodos(badtodos)
            var actual = JSON.parse(localStorage.getItem('todos'))
            expect(actual).toEqual(null) //toBe compares the obj in memory
        }) 
    })
    
    describe('getTodos', () => {
    it('should not get invalid items', ()=> { 
            // var todos = [{id:1, txt: 'testy mctestson', done: false}]
            // todoapi.setTodos(todos)
            var act = todoapi.getTodos()
            expect(act).toEqual([]) //toBe compares the obj in memory
        }) 
    })
    
    describe('getTodos', () => {
    it('should not get invalid items', ()=> { 
            var todos = [{id:1, txt: 'testy mctestson', done: false}]
            localStorage.setItem('todos', JSON.stringify(todos)) //do not use setTodos... test one thing at a time!
            var act = todoapi.getTodos('todos')
            expect(act).toEqual(todos) //toBe compares the obj in memory
        }) 
        
    })

})