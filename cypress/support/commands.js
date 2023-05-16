Cypress.Commands.add('loadMainPage', () => {
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", {
        fixture: "allMoviesData.json"
      })
});