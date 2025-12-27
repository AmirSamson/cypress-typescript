import TodoApi from "../APIs/TodoApi";
import UserApi from "../APIs/UserApi";
import User from "../Models/user";

it('should be able to add a todo', ()=>{
    const user = new User(
        'Testing Croc',
        "On chain",
        "a104@example.com",
        '1234qwer'
    );
    new UserApi().register(user);
    cy.visit('/todo');
    cy.get('[data-testid="todo-item"]').should('contain.text', 'how to Cypress');
});



it.only('should be able to delete a todo', ()=>{
    const user = new User(
        'Testing Croc',
        "On chain",
        "a109@example.com",
        '1234qwer'
    );

    new UserApi().register(user).then((response) =>{
        user.setToken(response.body.access_token)
        new TodoApi().addTodo(user)
    });

    cy.visit('https://todo.qacart.com/todo');
    cy.get('[data-testid="todo-item"]').should('contain.text', 'how to Cypress');
    cy.get('[data-testid="delete"]').click()
    cy.get('[data-testid="no-todos"]').should('be.visible')
    cy.get('[data-testid="no-todos"]').should('contain.text', 'No Available Todos')
});