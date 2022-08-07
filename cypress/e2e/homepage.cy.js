describe('Visit homepage', () => {
  beforeEach(() => {
    cy.intercept('GET','https://dnvr-boba-buddy-api.herokuapp.com/', {
      fixture: 'shops.json',
      statusCode: 200
    })
    cy.visit("http://localhost:3000/");
  });

  it('Should show an error message if the server is down', (() => {
    cy.intercept('GET', 'https://dnvr-boba-buddy-api.herokuapp.com/', {
      statusCode: 500
    })
    .get('.error-message').contains('Oops, something went wrong, please try again!')
  }));

  it('Should show an error message if the page is not found', (() => {
    cy.intercept('GET', 'https://dnvr-boba-buddy-api.herokuapp.com/', {
      statusCode: 404
    })
    .get('.error-message').contains('Oops, something went wrong, please try again!')
  }));

  it('Should display a header of BOBA BUDDY', () => {
    cy.get('h1').contains('BOBA BUDDY');
  });

  it.only('Should display a description of the page', () => {
    cy.get('.tagline').contains('Welcome to Boba Buddy, your guide to boba and milk tea in the Denver Metro Area!');
    cy.get('.description').should('be.visible');
  });

  it('Should display a section with a list of different regions to pick from', () => {
    cy.get('.regions-header').contains('Denver Metro Area Regions:');
    cy.get('.region-choices').should('be.visible');
    cy.get('.region-btn').should('have.length', 8);
  });

  it('Should allow for a list of boba shops to pop up if it matches what is typed into search bar', () => {
    cy.get('.shops-search-bar').type('Sharetea');
    cy.get('.individual-card').should('have.length', 4);
  });

  it('Should return to original home page if input is cleared', () => {
    cy.get('.shops-search-bar').type('Sharetea').clear();
    cy.get('.home');
  });

  it('Should navigate to specific region page once button is clicked', () => {
    cy.get('.region-btn').eq(4).click();
    cy.url().should('eq', 'http://localhost:3000/shops/Central');
  });

});