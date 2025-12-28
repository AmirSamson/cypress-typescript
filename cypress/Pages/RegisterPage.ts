import UserApi from "../APIs/UserApi";
import User from "../Models/user";

export default class RegisterPage{

    load(){
        cy.visit('/signup');
    }

    RegisterUsingApi(user:User){
       return new UserApi().register(user)
    }

    private get firstNameInput(){
        return '[data-testid="first-name"]';
    }
    private get lastNameInput(){
        return '[data-testid="last-name"]';
    }
    private get emailInput(){
        return '[data-testid="email"]'
    }
    private get passwordInput(){
        return '[data-testid="password"]'
    }
    private get confrimPasswordInput(){
        return '[data-testid="confirm-password"]'
    }
    private get submitButton(){
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