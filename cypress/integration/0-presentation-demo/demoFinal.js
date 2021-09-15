describe('example to-do app', () => {
    beforeEach(() => {

        cy.visit('http://127.0.0.1:8080/index.html');
    });
  

    it('searches for customers', () => {

        cy.get('#search-input').type('Coach')
  
        cy.get('#search-button').click();
    });  
    
    // add appropriate labels
    it('searches for customers', () => {

        cy.get('[data-test=search-input]').type('Coach')
  
        cy.get('[data-test=search-button]').click();
    });  

    // add an assertion - oops it fails!
    it('searches for customers', () => {

        cy.get('[data-test=search-input]').type('Coach')
  
        cy.get('[data-test=search-button]').click();

        cy.get('[data-test=results]').should('contain.text', 'Fetch failed!');
    });  

    // add a wait to get the test to pass    
    it('searches for customers', () => {

        cy.get('#search-input').type('Coach')
  
        cy.get('#search-button').click();

        cy.wait(5000);

        cy.get('[data-test=results]').should('contain.text', 'Fetch failed!');
    });  
    
    // Add intercept and appropriate wait
    it('searches for customers', () => {

        cy.intercept('GET', '/api/customers?*').as('customers');

        cy.get('#search-input').type('Coach')
  
        cy.get('#search-button').click();        

        cy.wait('@customers');

        cy.get('[data-test=results]').should('contain.text', 'Ted Lasso');
    });  

    // update assertion to real data
    it('searches for customers', () => {

        cy.intercept('GET', '/api/customers?*').as('customers');

        cy.get('#search-input').type('Coach')
  
        cy.get('#search-button').click();        

        cy.wait('@customers');

        cy.get('[data-test=results]').should('contain.text', 'Ted Lasso');
    });  

    // Add fixture to return fake data
    it('searches for customers', () => {

        cy.intercept('GET', '/api/customers?*',  { fixture: 'customers.json' }).as('customers');

        cy.get('#search-input').type('Coach')
    
        cy.get('#search-button').click();        

        cy.wait('@customers');

        cy.get('[data-test=results]').should('contain.text', 'Ted Lasso');
    });
}) ;