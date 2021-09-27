const {
    Given,
    Then
  } = require("cypress-cucumber-preprocessor/steps");

const url = 'https://google.com'


Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})
Given('I open Google page', () => {
  cy.visit(url)
})

