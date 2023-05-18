describe('Main Page', () => {
  beforeEach(() => {
    cy.loadMainPage()
    cy.visit('http://localhost:3000/')
  });

  it('should display the title and the home button upon loading the main page', () => {
    cy.get('h1').should('exist').should('be.visible')
      .contains('PUTRID_PEARS')
    cy.get('button').eq(0).contains('HOME')
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

  it('should be able to search for a movie by name', () => {
    cy.get('input[type="text').type('black adam')
      .should('have.value', 'black adam')
    cy.get('button').eq(1)
      .contains('Search')
      .click()
    cy.get('.movie-tile').should('have.length', 1)
      .find('img', '#436270').should('be.visible')
  })
});