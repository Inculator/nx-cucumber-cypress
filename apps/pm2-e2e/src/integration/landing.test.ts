import { assert } from 'console';
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the user is logged in', () => {
    cy.loginMKTP();
  });
  
  Then('the {string} message is displayed', (message: string) => {
    //   cy.get("h1").contains(message)
    cy.loginMKTP();
  });
  