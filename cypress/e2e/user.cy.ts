it('should be able to register', () =>{
    cy.visit('/signup');
    cy.get('[data-testid="first-name"]').type('Amir')
    cy.get('[data-testid="last-name"]').type('Amir')
    cy.get('[data-testid="email"]').type('601@gmail.com')
    cy.get('[data-testid="password"]').type('12345678Aa')
    cy.get('[data-testid="confirm-password"]').type('12345678Aa')
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="welcome"]').should("be.visible");
})