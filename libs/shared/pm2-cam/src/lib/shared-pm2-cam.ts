declare namespace Cypress {
  interface Chainable<Subject> {
      loginMKTP(): void;
  }
}

Cypress.Commands.add('loginMKTP', () => {
  cy.visit('https://example.cypress.io')
});
