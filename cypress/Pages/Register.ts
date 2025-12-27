import User from "../Models/user";

export default class RegisterPage{

    load(){
        cy.visit('/signup');
    }

    get firstNameInput(){
        return '[data-testid="first-name"]';
    }
    get lastNameInput(){
        return '[data-testid="last-name"]';
    }
    get emailInput(){
        return '[data-testid="email"]'
    }
    get passwordInput(){
        return '[data-testid="password"]'
    }
    get confrimPasswordInput(){
        return '[data-testid="confirm-password"]'
    }
    get submitButton(){
        return '[data-testid="submit"]'
    }

    register(user: User){
        cy.get(this.firstNameInput).type(user.getFirstName())
        cy.get(this.lastNameInput).type(user.getLastName())
        cy.get(this.emailInput).type(user.getEmail())
        cy.get(this.passwordInput).type(user.getPassword())
        cy.get(this.confrimPasswordInput).type(user.getPassword())
        cy.get(this.submitButton).click
    }
}