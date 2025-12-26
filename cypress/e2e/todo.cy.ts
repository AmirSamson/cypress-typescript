it('should be able to add a todo', ()=>{
    cy.visit('/login');
    cy.get('[data-testid="email"]').type('601@gmail.com')
    cy.get('[data-testid="password"]').type('12345678Aa')
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="add"]').click()
    cy.get('[data-testid="new-todo"]').type('how to Cypress');
    cy.get('[data-testid="submit-newTask"]').click()
    cy.get('[data-testid="todo-item"]').should('contain.text', 'how to Cypress');
})

it('should be able to delete a todo', ()=>{
    cy.visit('/signup');
    cy.get('[data-testid="first-name"]').type('Amir')
    cy.get('[data-testid="last-name"]').type('Amir')
    cy.get('[data-testid="email"]').type('602@gmail.com')
    cy.get('[data-testid="password"]').type('12345678Aa')
    cy.get('[data-testid="confirm-password"]').type('12345678Aa')
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="welcome"]').should("be.visible");
    cy.get('[data-testid="add"]').click()
    cy.get('[data-testid="new-todo"]').type('how to Cypress');
    cy.get('[data-testid="submit-newTask"]').click()
    cy.get('[data-testid="todo-item"]').should('contain.text', 'how to Cypress');
    cy.get('[data-testid="delete"]').click()
    cy.get('[data-testid="no-todos"]').should('be.visible')
    cy.get('[data-testid="no-todos"]').should('contain.text', 'No Available Todos')
})