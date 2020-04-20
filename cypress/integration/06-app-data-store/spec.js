/// <reference types="cypress" />
// application should be running at port 3000
// and the "localhost:3000" is set as "baseUrl" in "cypress.json"
beforeEach(() => {
  cy.request('POST', '/reset', {
    todos: []
  })
  cy.visit('/')
})

beforeEach(function stubRandomId() {
  let count = 1
  cy.window()
    .its('Math')
    .then(Math => {
      cy.stub(Math, 'random', () => {
        return `0.${count++}`
      }).as('random') // save reference to the spy
    })
})

const enterInput = function(text) {
    cy.get('.new-todo').type(`${text}{enter}`)
};


it('adds items to store', () => {
  enterInput('something')
  enterInput('something else')
   cy.window()
      .its('app.$store.state.todos')
      .should('have.length', 2)
})

it('creates an item with id 1', () => {
  cy.server()
  cy.route('POST', '/todos').as('new-item')

  // TODO change Math.random to be deterministic

  // STEPS
  // get the application's "window" object using cy.window
  // then change its Math object and replace it
  // with your function that always returns "0.1"

  enterInput('something')
  // confirm the item sent to the server has the right values
  cy.wait('@new-item')
    .its('request.body')
    .should('deep.equal', {
      id: '1',
      title: 'something',
      completed: false
    })
})

it('calls spy twice', () => {
  enterInput('something')
  enterInput('else')
  cy.get('@random').should('have.been.calledTwice')
})

it('puts todos in the store', () => {
  enterInput('something')
  enterInput('else')
  cy.window()
    .its('app.$store.state.todos')
    .should('deep.equal', [
      { title: 'something', completed: false, id: '1' },
      { title: 'else', completed: false, id: '2' }
    ])
})