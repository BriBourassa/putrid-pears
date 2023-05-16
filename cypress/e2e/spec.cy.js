describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", {
      statusCode: 201,
      fixture: "allMoviesData.json"
    })
    cy.visit('http://localhost:3000/')
  });

  it('should display the title upon loading the main page', () => {
    cy.get('h1')
      .contains('PUTRID_PEARS')
  })

  it('should display the movies on main page', () => {
    cy.get('.movie-tile')
      .get('#436270')
      .find('img')
      .get('#724495')
      .find('img')
      .get('#1013860')
      .find('img')
  })




});