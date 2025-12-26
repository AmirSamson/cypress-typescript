import UserAPI from "../APIs/UserAPI";
import User from "../Models/user";

it.only('should be able to register', () =>{
    const user = new User(
        'Testing Croc',
        "On chain",
        "a103@example.com",
        '1234qwer'
    );
    new UserAPI().register(user);
    cy.visit('/todo');
    cy.get('[data-testid="welcome"]').should("be.visible");
});