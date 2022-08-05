describe('Visit region page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://dnvr-boba-buddy-api.herokuapp.com/', {
      fixture: 'shops.json',
      statusCode: 200
    }); 
    cy.visit('http://localhost:3000/shops/Central');
  });
  
  it('Should display a header of BOBA BUDDY', () => {
    cy.get('h1').contains('BOBA BUDDY');
  });

  it('Should display a list of shops in that region', () => {
    cy.get('.shops-container').should('be.visible').within(() => {
      cy.get('.individual-card').should('have.length', 16);
    });
  });

  it('Should display each shop\'s name and address', () => {
    cy.get('.shops-container').children('.individual-card').each(() => {
      cy.get('.name').should('exist');
      cy.get('.address').should('exist');
    });
  });

  it('Should navigate to another site (new tab) if a user clicks on a shop\'s website icons', () => {
    cy.get('.individual-card').eq(9).within(() => {
      cy.get('.yelp').should('have.attr', 'href', 'https://www.yelp.com/biz/milk-tea-people-denver').then(link => {
        cy.request(link.prop('href')).its('status').should('eq', 200);
      });
      cy.get('.facebook').should('have.attr', 'href', 'https://www.facebook.com/MilkTeaPeople/').then(link => {
        cy.request(link.prop('href')).its('status').should('eq', 200);
      });
      cy.get('.instagram').should('have.attr', 'href', 'https://www.instagram.com/milkteapeople/?hl=en').then(link => {
        cy.request(link.prop('href')).its('status').should('eq', 200);
      });
      cy.get('.website').should('have.attr', 'href', 'https://www.milkteapeople.com/').then(link => {
        cy.request(link.prop('href')).its('status').should('eq', 200);
      });
    });
  });
});