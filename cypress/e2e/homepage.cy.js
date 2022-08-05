describe('Visit homepage', () => {
  beforeEach(() => {
    // cy.intercept('GET','https://dnvr-boba-buddy-api.herokuapp.com/', {
    //   fixture: 'shops.json',
    //   statusCode: 200
    // })
    cy.visit("http://localhost:3000/");
  });

  it('Should display a header of BOBA BUDDY', () => {
    cy.get('h1').contains('BOBA BUDDY');
  });

  it('Should display a description of the page', () => {
    cy.get('.description').contains('Welcome to Boba Buddy!');
  });

  it('Should display a section with a list of different regions to pick from', () => {
    cy.get('.regions-header').contains('Denver Metro Area Regions:');
    cy.get('.region-choices').should('be.visible');
    cy.get('.region-btn').should('have.length', 8);
  });

  it('Should navigate to specific region page once button is clicked', () => {
    cy.get('.region-btn').eq(4).click();
    cy.url().should('eq', 'http://localhost:3000/shops/Central');
  });
});