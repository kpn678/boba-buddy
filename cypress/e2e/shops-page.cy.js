describe('Visit region page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://dnvr-boba-buddy-api.herokuapp.com/', {
      fixture: 'shops.json',
      statusCode: 200
    }); 
    cy.visit('http://localhost:3000/shops/Central');
  });

  it('Should show an error message if the server is down', (() => {
    cy.intercept('GET', 'https://dnvr-boba-buddy-api.herokuapp.com/', {
      statusCode: 500
    })
    .get('.error-message').contains('Oops, something went wrong, please try again!');
  }));

  it('Should show an error message if the page is not found', (() => {
    cy.intercept('GET', 'https://dnvr-boba-buddy-api.herokuapp.com/', {
      statusCode: 404
    })
    .get('.error-message').contains('Oops, something went wrong, please try again!');
  }));
  
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

  it('Should navigate back to homepage if the header is clicked on', () => {
    cy.get('h1').click();
    cy.url().should('eq', 'http://localhost:3000/');
  })
});