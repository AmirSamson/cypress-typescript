import UserAPI from "../APIs/UserAPI";
import User from "../Models/user";

it('should be able to add a todo', ()=>{
    const user = new User(
        'Testing Croc',
        "On chain",
        "a104@example.com",
        '1234qwer'
    );
    new UserAPI().register(user);
    cy.visit('/todo');
    cy.get('[data-testid="todo-item"]').should('contain.text', 'how to Cypress');
});

it.only('should be able to delete a todo', ()=>{
    const user = new User(
        'Testing Croc',
        "On chain",
        "a106@example.com",
        '1234qwer'
    );

    let token: string;
    new UserAPI().register(user).then((response) =>{
        token = response.body.access_token;
        //moved the 'cy.request' inside the "then" since in CYPRESS we don't have the 'Await' that we had in Playwright. 
        // that is why we need to put this cy.requset inside so that the Token is put in `Bearer ${token} after it was created.
            cy.request({
            method:"POST",
            url: 'https://todo.qacart.com/api/v1/tasks',
            body:{
                isCompleted: false,
            item: "how to Cypress"
            },
            headers:{
                authorization: `Bearer ${token}`
            }
        });
    });

    cy.visit('https://todo.qacart.com/todo');
    cy.get('[data-testid="todo-item"]').should('contain.text', 'how to Cypress');
    cy.get('[data-testid="delete"]').click()
    cy.get('[data-testid="no-todos"]').should('be.visible')
    cy.get('[data-testid="no-todos"]').should('contain.text', 'No Available Todos')
});