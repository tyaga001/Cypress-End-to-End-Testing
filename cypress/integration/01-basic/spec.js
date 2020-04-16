 eslint-disable prettier/prettier
/// <reference types="cypress" />
// @ts-check
// it('loads', () => {
//     // application should be running at port 3000
//     cy.visit('localhost:3000')

//     // passing assertions
//     // https://on.cypress.io/get
//     //cy.get('.new-todo').get('footer')
//     cy.get('[data-cy= app-title]').get('footer').should('be.visible')

//     // this assertion fails on purpose
//     // can you fix it?
//     // https://on.cypress.io/get
//     cy.contains('h1', 'Todos', { matchCase: false }).should('be.visible')

//     cy.contains('h1', /todos/)
//         // cy.contains('h1', /^todos$/)

//     cy.contains('[data-cy=app-title]', 'todos').should('be.visible')

//     // can you write "cy.contains" using regular expression?
//     // cy.contains('h1', /.../)

//     // also good practice is to use data attributes specifically for testing
//     // see https://on.cypress.io/best-practices#Selecting-Elements
//     // which play well with "Selector Playground" tool
//     // how would you do select this element?
// })

describe("Validation Form test", () => {
    it("Let's fill the validation form", () => {
        cy.visit("/");

        cy.get("form");

        cy.get('#name').type("Ankur");

        cy.get('#email').type("abc@gmail.com");

        cy.get('#phone').type('9090900');

        cy.get('#country').type("India");

        cy.get('#city').type("Pune");

        cy.get('#username').type("admin");

        cy.get('#password').type("admin");

        cy.get('button').click;

    });
});