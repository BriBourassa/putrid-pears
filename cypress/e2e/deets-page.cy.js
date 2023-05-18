describe("Details Page", () => {
  beforeEach(() => {
    cy.loadDetailsPage();
    cy.visit("http://localhost:3000/movies/436270");
  });

  it("should be able to click a movie and see that movie's details", () => {
    cy.get(".router-link")
      .contains("h2", "Black Adam")
    cy.get('.router-link')
      .contains('h3', 'The world needed a hero. It got Black Adam')
    cy.get('.poster').should('be.visible')
    cy.get('.detail').should('have.length', 3)
    cy.get('.movie-overview').contains('Nearly 5,000 years after he was bestowed').should('be.visible')
  });

  it('should return to main page when home button is clicked, where all movies are displayed', () => {
    cy.loadMainPage()
    cy.get('button').eq(0).click()
    cy.get('.movie-tile').should('have.length', 3)
  })

  it('should show error when user navigates to nonexistant movie url path', () => {
    cy.visit('http://localhost:3000/movies/43627')
      .contains('Single Movie call - Task Failed successfully!')
  })
});
