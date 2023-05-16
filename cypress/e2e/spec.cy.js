describe('Main Page', () => {
  beforeEach(() => {
    cy.loadMainPage()
    cy.visit('http://localhost:3000/')
  });

  it('should display the title upon loading the main page', () => {
    cy.get('h1')
      .contains('PUTRID_PEARS')
  })

  it('should display the movies on main page', () => {
    cy.get('.movie-tile').should('have.length', 3)
      .get('#436270')
      .find('img')
      .get('#724495')
      .find('img')
      .get('#1013860')
      .find('img')
  })




});