describe('example to-do app', () => {
    beforeEach(() => {

        cy.visit('http://127.0.0.1:8080/index.html');
    });
  
    it('searches for customers', () => {

        cy.get('#search-input').type('Ted Lasso')
  
        cy.get('#search-button').click();

        cy.get('#results').should('have.text', 'Ted Lasso')
    });  

    it('searches for customers', () => {

        cy.get('#search-input').type('Ted Lasso')
  
        cy.get('#search-button').click();

        cy.get('#results').should('have.text', 'Ted Lasso')
    });  
}) ;