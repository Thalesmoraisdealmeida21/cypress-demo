import axios from 'axios'
import RegisterPage from '../pages/register.page'
const {
    Given,
    Then,
    When
  } = require("cypress-cucumber-preprocessor/steps");

const url = 'westwing.com.br'



Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})
Given('acessei a home da westwing', () => {
  cy.visit(url)
})

When('clico para se cadastrar', () => {
  cy.get(".signup-resp__main__bottom > .signup-resp__main__button--signup").click();
})

When('preencho email e senha e clico para cadastrar', async () => {
   await RegisterPage.doRegister();
})

