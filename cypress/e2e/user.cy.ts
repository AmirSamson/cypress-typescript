import User from "../Models/user";
import RegisterPage from "../Pages/Register";

it.only('should be able to register', () =>{
    const user = new User(
        'Testing Croc',
        "On chain",
        "a103@example.com",
        '1234qwer'
    );
    const registerPage = new RegisterPage();
    registerPage.load();
    registerPage.register(user);
    cy.get('[data-testid="welcome"]').should("be.visible");
});