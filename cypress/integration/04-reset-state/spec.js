/// <reference types="cypress" />
/**
 * Adds a todo item
 * @param {string} text
 */

const enterInput = function(text) {
    cy.get('.new-todo').type(`${text}{enter}`)
};

describe('reset data using XHR call', () => {
    beforeEach(() => {
        cy.request('POST', '/reset', {
            todos: []
        })
        cy.visit('/')
    })
    it('adds two items', () => {
        enterInput('first item')
        enterInput('second item')
        cy.get('li.todo').should('have.length', 2)
    })
})

describe('reset data using cy.writeFile', () => {
    beforeEach(() => {
        const emptyTodos = {  todos: []  }
        const str = JSON.stringify(emptyTodos, null, 2) + '\n'
        cy.writeFile('todomvc/data.json', str, 'utf8')
        cy.visit('/')
    })
    it('adds two items', () => {
        enterInput('first item')
        enterInput('second item')
        cy.get('li.todo').should('have.length', 2)
    })
})

describe('reset data using a task', () => {
    beforeEach(() => {
        cy.task('resetData')
        cy.visit('/')
    })
    it('adds two items', () => {
        enterInput('first item')
        enterInput('second item')
        cy.get('li.todo').should('have.length', 2)
    })
})

describe('set initial data', () => {
    it('sets data to complex object right away', () => {
        cy.task('resetData', {
            todos: [{
                id: '123456abc',
                completed: true,
                title: 'reset data before test'
            }]
        })
        cy.visit('/')
    })


    it('sets data using fixture', () => {
        cy.fixture('two-items').then(todos => {
            cy.task('resetData', { todos })
        })
        cy.visit('/')
    })
})