
import axios from 'axios'
var emailAndDomain = '';


class RegisterPage {


    constructor(inputs, buttons) {
        this.inputs = {
            email: '#signup-resp__form__input--email',
            password: '#signup-resp__form__input--password',
        }
    
        this.buttons = {
            cadastrese: '.signup-resp__main__button--entry--signup',
            termsOfUse: ':nth-child(12) > .signup-resp__form__checkbox-label'
        }

     
      }
   

     async doRegister()  {

        const response = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1");
        const email = response.data[0]
        let emailAndDomain = email.split("@");
      
        cy.get(this.inputs.email).type(email)
        cy.get(this.inputs.password).type("12345678")
        cy.get(this.buttons.termsOfUse).click();
        cy.get(this.buttons.cadastrese).click();
      
        cy.get(".l-header__bottom-items > :nth-child(1) > .l-header__bottom-item-subline").should('have.text', emailAndDomain[0])
    }
}

export default new RegisterPage();

