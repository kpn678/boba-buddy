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
    cy.get('.description').contains('Welcome to Boba Buddy!')
  });

});