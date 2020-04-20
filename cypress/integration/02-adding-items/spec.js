/* eslint-disable prettier/prettier */
/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('localhost:3000')
})

it('loads the todoApp', () => {
    cy.get('[data-cy= app-title]').get('footer').should('be.visible')
    cy.contains('[data-cy=app-title]', 'todos').should('be.visible')
})

it('verify the placeholder text', () => {
    cy.get('.new-todo').should('be.visible')
})

const enterInput = function(text) {
    cy.get('.new-todo').type(`${text}{enter}`)
};

it('adds two items', () => {
    cy.get('.new-todo').type('cypress text 1{enter}')
    cy.contains('li.todo', 'cypress text 1').should('be.visible')
    cy.get('.new-todo').type('cypress text 2{enter}')
    cy.contains('li.todo', 'cypress text 2').should('be.visible')
})

it('can mark an item as completed', () => {
    enterInput('Cypress')
    enterInput('Selenium')
        // marks the first item as completed
    cy.contains('li.todo', 'Cypress')
        .should('be.visible')
        .find('.toggle')
        .check()

    // confirms the first item has the expected completed class
    cy.contains('li.todo', 'Cypress').should('have.class', 'completed')
        // confirms the other items are still incomplete
    cy.contains('li.todo', 'hard').should('not.have.class', 'completed')

})

it('can delete an item', () => {
    // adds a few items
    enterInput('Testing')
    enterInput('Development')
        // deletes the first item
        // use force: true because we don't want to hover
    cy.contains('li.todo', 'Testing')
        .should('be.visible')
        .find('.destroy')
        .click({ force: true })
        .pause();
    // confirm the deleted item is gone from the dom
    cy.contains('li.todo', 'Testing').should('not.have.class', 'completed')
        // confirm the other item still exists
    cy.contains('li.todo', 'Development')
        .should('be.visible')
        .find('.toggle')
        .check()
    cy.contains('li.todo', 'Development').should('have.class', 'completed')
})

it('can add many items', () => {
    const N = 5
    for (let k = 0; k < N; k += 1) {
        enterInput(`item ${k}`)
    }
    // check number of items
    cy.get('li.todo').should('have.length', 10)
})

it('adds item with random text', () => {
    const randomLabel = `Item ${Math.random()
    .toString()
    .slice(2, 14)}`

    enterInput(randomLabel)
    cy.contains('li.todo', randomLabel)
        .should('be.visible')
        .and('not.have.class', 'completed')
})

it('starts with zero items', () => {
    cy.get('li.todo').should('have.length', 0)
})

// what a challenge?
// test more UI at http://todomvc.com/examples/vue/