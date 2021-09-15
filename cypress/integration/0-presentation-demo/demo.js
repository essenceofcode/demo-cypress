describe('example to-do app', () => {
    beforeEach(() => {

        cy.visit('http://127.0.0.1:8080/index.html');
    });
  

    it('searches for customers', () => {

        cy.intercept('GET', '/api/customers?*', { fixture: 'customers.json' }).as('customers');

        cy.get('[data-test=search-input]').type('Ted Lasso')
  
        cy.get('[data-test=search-button]').click();

        cy.wait('@customers');

        cy.get('[data-test=results]').should('have.text', 'Ted Lasso');
    });        
}) ;