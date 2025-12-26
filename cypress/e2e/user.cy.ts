import User from "../Models/user";

it.only('should be able to register', () =>{
    const user = new User(
        'Testing Croc',
        "On chain",
        "a102@example.com",
        '1234qwer'
    );
    cy.request({
        method: "POST",
        url: '/api/v1/users/register' ,
        body:{
            email: user.getEmail(),
            firstName: user.getFirstName(),
            lastName: user.getLastName(),
            password: user.getPassword(),
        }
    });
    cy.visit('/todo');
    cy.get('[data-testid="welcome"]').should("be.visible");
});